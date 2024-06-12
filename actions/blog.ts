"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const saveBlog = async (title : string, blogContent : string, headerImageURL : string) => {

    const session = await auth();
    const userId = session?.user.id;

    try{
        await db.blog.create({
            data : {
                title : title,
                content : blogContent,
                headerImage : headerImageURL,
                author : { connect : {id : userId} }
            }
        }) 
        return { success: "Blog Published." };
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong." };
    }
};