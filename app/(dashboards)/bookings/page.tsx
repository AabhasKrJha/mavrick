"use client";

import { recordEnquiry } from "@/actions/bookings";
import { FormError } from "@/components/forms/form-error";
import { FormSuccess } from "@/components/forms/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useTransition } from "react";

export default function BookingsPage(){

    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    
    const onSubmit = (formData : FormData) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            recordEnquiry(formData)
            .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        })
    }

    return(
        <form action={onSubmit} className="p-10 space-y-10">
            <h1 className="mb-10 font-bold text-4xl">Booking Enquiry Form</h1>
            <div className="space-y-4">
                <span className="font-semibold">Name</span>
                <Input name="name" placeholder="Enter your name"/>
            </div>
            <div className="space-y-2">
                <span className="font-semibold">Phone number</span>
                <Input name="phone" placeholder="Enter your Phone Number"/>
            </div>
            <div className="space-y-2">
                <span className="font-semibold">Email</span>
                <Input name="email" type="email" placeholder="Enter your Email"/>
            </div>
            <div className="space-y-2">
                <span className="font-semibold">Query</span>
                <Textarea name="query" className="h-[20vh]" placeholder="Enter your query"/>
            </div>
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <Button type="submit">Send Enquiry</Button>
        </form>
    )
}