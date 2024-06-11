import {useEditor, EditorContent, Editor} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";

import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Text from '@tiptap/extension-text'
import Heading from "@tiptap/extension-heading";
import Paragraph from '@tiptap/extension-paragraph';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

import { Toolbar } from "@/components/Toolbar";
import { Button } from "@/components/ui/button";

export function Tiptap(){
    const editor = useEditor({
        extensions : [
            StarterKit.configure(),
            Document, Text, 
            Dropcursor,
            Heading.configure({
                levels: [2],
                HTMLAttributes : { 
                    class: "text-2xl font-bold py-4", 
                    levels : [2] 
                }
            }),
            Paragraph.configure({
                HTMLAttributes : {
                    class : "py-2",
                }
            }),
            Link.configure({
                protocols: [
                    {
                      scheme: 'https',
                      optionalSlashes: true
                    }
                ],
                openOnClick: true,
                autolink: true,
                HTMLAttributes : {
                    class : "color-blue-300 underline",
                }
            }),
            Image.configure({
                HTMLAttributes : {
                    class : "w-[50%] h-auto m-auto rounded-lg",
                }
            })
        ],
        editorProps : {
            attributes : {
                class : "border-2 p-4 rounded-lg outline-black"
            }
        }, 
        onUpdate({editor}) {
            (document.getElementById("json-output") as HTMLInputElement).value = JSON.stringify(editor.getJSON());
            (document.getElementById("html-output") as HTMLInputElement).value = editor.getHTML();
        }
    })
    return(
        <div className="flex flex-col gap-4">
            <Toolbar editor={editor as Editor}/>
            <EditorContent editor={editor}/>
            {(!editor) ? (null) : (<Button className="w-fit" type="submit">Publish</Button>)}
        </div>
       
    )
}