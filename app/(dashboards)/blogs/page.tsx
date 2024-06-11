import { db } from "@/lib/db"
import Link from "next/link";

export default async function BlogsPage() {
    const blogs = await db.blog.findMany({
        include: { author: true }, 
        orderBy : { createdAt : "desc" }
    });

    return(
        <div className="p-10">
            <h1 className="text-6xl font-bold">Blogs</h1> <br />
            Embark on an extraordinary odyssey with Maverick&apos;s Blogs—a captivating journal 
            that unfolds the tales of diverse journeys. Immerse yourself in the chronicles of 
            exploration, discovery, and the vibrant tapestry of life on the road. 
            Join us as we navigate the world, one compelling story at a time. <br /><br />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog, index) => (
                    <Link key={index} href={`/blog/${blog.id}`}>
                        <div className="w-full border-2 rounded-lg flex flex-col items-center p-5 bg-gray-100 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg" key={blog.id}>
                            <img alt={`blog-${blog.id}`} src={blog.headerImage} className="w-full"/> <br />
                            <div className="w-full">
                                <p className="text-xl font-bold">{blog.title}</p>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span>{blog.author.name}</span> <span> | </span>
                                    <span>{new Date(blog.createdAt).toISOString()}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}