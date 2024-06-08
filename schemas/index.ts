import * as z from "zod";

export const LoginSchema = z.object({
    username : z.string().min(1, {
        message : "Invalid username"
    }),
    password : z.string().min(1, {
        message : "Password is required"
    }),
})

export const RegisterSchema = z.object({
    name : z.string().min(1, { message : "Name is required" }),
    username : z.string().min(1, { message : "Username is required" }),
    email : z.string().email(), 
    password : z.string().min(8, { message : "Minimum 8 charectors required" })
})