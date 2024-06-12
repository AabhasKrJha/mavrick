"use server";

import { db } from "@/lib/db";

export const recordEnquiry = async (formData : FormData) => {
        
    try{
        await db.bookings.create({
            data : {
                name : formData.get("name") as string, email: formData.get("email") as string, phone : formData.get("phone") as string, query : formData.get("query") as string
            }
        })
        return { success: "Enquiry sent." };
    } catch {
        return { error: "Something went wromg." };
    }
    
};