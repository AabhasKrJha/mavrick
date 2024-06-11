import { cn } from "@/lib/utils";
import { MoveDownIcon } from "lucide-react";
import { Crimson_Pro } from "next/font/google";
import { Button } from "./ui/button";

const crimsonPro = Crimson_Pro({
    subsets: ["latin"],
    weight: "600",
    style: "italic",
    display: "swap",
  });

export function HeroSection(){
    return(
        <div className="h-[90vh] flex flex-col items-center justify-center mt-20 md:mt-0 gap-10 md:gap-0">
            <Button className="text-xs md:text-lg text-blue-900 rounded-full hover:bg-transparent bg-transparent border-2 cursor-default border-blue-900">Travel Blogs and Bookings</Button>
            <div className={cn(crimsonPro.className ,"flex flex-col gap-1 md:gap-6 items-center justify-center")}>
                <h1 className="text-7xl lg:text-9xl italic text-blue-200 text-center">Life of a Maverick</h1>
                <span className="text-xl lg:text-3xl italic text-blue-200 mb-80">Since Nov 19, 2017</span>
                {/* <MoveDownIcon className="mb-80 font-black text-white" size={70}/> */}
            </div>
        </div>
    )
}