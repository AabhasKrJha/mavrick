"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { findIfUserExists } from "@/data";

type ValidatedFields<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: z.ZodError;
};

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields: ValidatedFields<typeof values> = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Registration Failed." };
    }

    const { name, username, email, password } = validatedFields.data;
    const hashed_password = await bcrypt.hash(password, 10);

    const existing_user = await findIfUserExists(username, email);

    if (existing_user) {
        return { error : "Email or username in use." }
    }

    // registering student user
    await db.user.create({
        data : {
            name : name, username: username, email : email, password : hashed_password
        }
    })

    return { success: "Account Created. Login to Continue." };
};