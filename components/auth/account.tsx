import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AccountBtn(){
    return(
        <Link className="ml-3" href={"/login"}>
            <Button className="border-2 border-black hover:text-black hover:bg-white">Login</Button>
        </Link>
    )
}