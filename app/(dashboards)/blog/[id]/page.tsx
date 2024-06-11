import { Button } from "@/components/ui/button";
import { db } from "@/lib/db"
import Link from "next/link";

export default async function BlogPage({params} : {params : {id : string}}){
    const blog = await db.blog.findUnique({
        where: { id: params.id },
        include: { author: true },
      });
    if (!blog) {
        return ( 
            <div className="flex flex-col items-center justify-center gap-10 p-10">
                <h1 className="p-10 text-center text-5xl">Page Not found.</h1>
                <Link href={"/blogs"}>
                    <Button className="border-2 border-black text-black hover:text-white bg-white rounded-full text-2xl p-7">View All Blogs</Button>
                </Link>
            </div>
        )
    }
    return(
        <div className="p-10 flex items-center justify-center">
            <div className="max-w-screen-md flex-1">
                <div className="flex flex-col item-center justify-center gap-4">
                    <div className="border-b-2 pb-4 space-y-8">
                        <h1 className="text-6xl font-bold ">{blog.title}</h1>
                        <div className="flex items-center gap-4 text-gray-400">
                            <span>{blog.author.name}</span> <span> | </span>
                            <span>{new Date(blog.createdAt).toISOString()}</span>
                        </div>
                        <center><img alt="blog-header-image" className="w-full" src={blog.headerImage}/></center>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: blog?.content || '' }} />
                </div>
            </div>
        </div>
    )
}