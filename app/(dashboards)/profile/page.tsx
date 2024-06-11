"use client";

import { MyBlogsTab } from "@/components/tabs/blogs";
import { BlogEditorTab } from "@/components/tabs/editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileForm() {
    return (
        <Tabs defaultValue="my-blogs" className="px-10 space-y-6">
            <TabsList className="bg-black text-white">
                <TabsTrigger value="my-blogs">My Blogs</TabsTrigger>
                <TabsTrigger value="blog-editor">Create Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="my-blogs"><MyBlogsTab/></TabsContent>
            <TabsContent value="blog-editor"><BlogEditorTab/></TabsContent>
        </Tabs>
    )
}
