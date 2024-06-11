"use client";

import { Tiptap } from "@/components/Tiptap";

import { FormSuccess } from "@/components/forms/form-success"
import { FormError } from "@/components/forms/form-error"
import { startTransition, useState } from "react";
import { saveBlog } from "@/actions/blog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function ShowBlogsBtn(){
    return(
        <a className="hover:underline" href={'/profile'}>
            <Button className="bg-white text-black hover:text-white border-2 border-black rounded-full">Show All Blogs</Button>
        </a>
    )
}

export function BlogEditorTab(){

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const onSubmit = (formData : FormData) => {
        setError("");
        setSuccess("");
        const htmlOutput = formData.get("html-output");
        const title = formData.get("title");
        const headerImageURL = (document.getElementById("header-image-url") as HTMLInputElement).value;
        startTransition(() => {
            saveBlog(title as string, htmlOutput as string, headerImageURL)
            .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        })
    }

    const uploadHeader = () => {
        const headerImageURL = (document.getElementById("header-image-url") as HTMLInputElement).value;
        console.log(headerImageURL);
        (document.getElementById("header-image") as HTMLImageElement).src = headerImageURL;
        (document.getElementById("header-image") as HTMLImageElement).hidden = false;
    }

    return(
        <div className="flex flex-col gap-10 p-10">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">Create Blog</h1> <ShowBlogsBtn/>
            </div>
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <div className="flex gap-4">
                <Input id="header-image-url" placeholder="Enter header image URL"/>
                <Button className="w-fit" onClick={uploadHeader}>Upload</Button>
            </div>
            <div>
                <img id="header-image" src="" alt="header-image" height={200} width={200} hidden/>
            </div>

            <form action={onSubmit} className="space-y-8 rounded-lg">
                <input name="json-output" id="json-output" hidden/>
                <Input name="title" placeholder="Enter title"/>
                <Tiptap/>
                <input hidden className="w-[70vw] border-2" name="html-output" id="html-output"></input>
            </form>
            <FormError message={error}/>
            <FormSuccess message={success}/>
        </div>
    )
}