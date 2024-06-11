import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";

function AddBlogBtn(){
    return(
        <Link href={'/create/blog'}>
            <Button className="bg-white text-black hover:text-white border-2 border-black rounded-full">Add Blog</Button>
        </Link>
    )
}

export default async function ProfileForm() {
    const session = await auth();
    const userId = session?.user.id;
    const blogs = await db.blog.findMany({
        where : {authorId : userId}
    })
    return (
        <div className="px-10 py-10 flex flex-col gap-8">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">My Blogs</h1> <AddBlogBtn/>
            </div>
            <div className="grid grid-cols-1 gap-2 py-4">
                {blogs.map((blog, index) => (
                    <div key={index} className="flex item-center gap-2">
                        {index+1}. <Link className="hover:underline" href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
