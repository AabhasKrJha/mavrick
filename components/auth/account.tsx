import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export async function AccountBtn(){
    const session = await auth();
    const userId = session?.user.id;
    if (userId === undefined){
        return(
            <Link href={"/login"}>
                <Button className="border-2 border-black hover:text-black hover:bg-white rounded-full">Login</Button>
            </Link>
        )
    }
    return(
        <Link href={"/profile"}>
            <Button className="border-2 border-black hover:text-black hover:bg-white rounded-full">Profile</Button>
        </Link>
    )
}