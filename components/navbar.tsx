import { Logo } from "@/components/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AccountBtn } from "./auth/account";

function Navlink({href, linktext} : {href : string, linktext : string}){
    return(
        <Link href={href}>
            <Button className="bg-trasparent text-black border-2 border-black hover:bg-white hover:text-black" >{linktext}</Button>
        </Link>
    )
}

function Navlinks(){
    return(
        <div className="flex items-center justify-center gap-4">
            <Navlink href="/blogs" linktext="Blogs"/>
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
        <div className="px-10 pt-10 md:pt-0 flex flex-col md:flex-row items-center justify-between h-[10vh]">
            <Logo/>
            <Navlinks/>
        </div>
    )
}