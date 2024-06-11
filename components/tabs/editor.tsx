import { Tiptap } from "@/components/Tiptap"

export function BlogEditorTab(){
    function onSubmit(formData : FormData) {
        try{
            console.log(JSON.parse(formData.get("editor-output") as string).content)
        } catch {
            console.log("NO OUTPUT GEERATED")
        }
    }
    return(
        <div className="flex flex-col gap-20 mt-20 md:mt-10">
            <form action={onSubmit} className="space-y-8 rounded-lg">
                <input name="editor-output" id="editor-output" hidden/>
                <Tiptap/>
            </form>
            <div id="html-output"></div>
        </div>
    )
}