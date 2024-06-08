import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export async function AccountBtn(){
    const session = await auth();
    const userId = session?.user.id;
    if (userId === undefined){
        return(
            <Link className="ml-3" href={"/login"}>
                <Button className="border-2 border-black hover:text-black hover:bg-white">Login</Button>
            </Link>
        )
    }
    return(
        <Link className="ml-3" href={"/profile"}>
            <Button className="border-2 border-black hover:text-black hover:bg-white">Profile</Button>
        </Link>
    )
}