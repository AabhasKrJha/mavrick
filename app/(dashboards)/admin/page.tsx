import { auth } from "@/auth";
import { redirect } from "next/navigation";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
  


export default async function AdminPanel() {
    const session = await auth();
    const role = session?.user.role;
    if (role != "ADMIN"){
        redirect("/")
    }
    const bookings = await db.bookings.findMany();
    return(
        <div className="p-10">
            <h1 className="font-bold text-4xl mb-4">Bookings</h1>
            <Accordion type="single" collapsible className="w-full">
                {bookings.map((booking, index) => (
                   <AccordionItem key={index} value={"index as unknown as string"}>
                        <AccordionTrigger>{booking.name}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2">
                            <div><span className="font-semibold">Name : </span> {booking.name}</div>
                            <div className=" flex items-center gap-2">
                                <span className="font-semibold">Phone : </span> 
                                {booking.phone}
                                <Link href={`tel:${booking.phone}`}><Button>Call</Button></Link>
                                <Link href={`https://wa.me/+9${booking.phone}`}><Button>Whatsapp</Button></Link>
                            </div>
                            <div className=" flex items-center gap-2">
                                <span className="font-semibold">Email : </span> 
                                {booking.email}
                                <Link href={`mailto:${booking.email}`}><Button>Mail</Button></Link>
                            </div>
                            <div><span className="font-semibold">Query : </span> {booking.query}</div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}