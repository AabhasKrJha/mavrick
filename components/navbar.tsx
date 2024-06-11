import { Logo } from "@/components/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AccountBtn } from "./auth/account";

function Navlink({href, linktext} : {href : string, linktext : string}){
    return(
        <Link href={href}>
            <Button className="font-normal text-[18px]" variant={"link"} >{linktext}</Button>
        </Link>
    )
}

function Navlinks(){
    return(
        <div className="flex items-center justify-center gap-4">
            <Navlink href="#blogs" linktext="Blogs"/>
            {/* <Navlink href="#docs" linktext="Documentaries"/>
            <Navlink href="#gallery" linktext="Gallery"/> */}
            <Navlink href="/bookings" linktext="Bookings"/>
            {/* <Navlink href="#contact" linktext="Contact"/> */}
            <AccountBtn/>
        </div>
    )
}

export function Navbar(){
    return(
        <div className="px-10 flex items-center justify-between h-[10vh]">
            <Logo/>
            <Navlinks/>
        </div>
    )
}