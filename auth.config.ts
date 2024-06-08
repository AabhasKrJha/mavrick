import Credentials from "next-auth/providers/credentials";
// import type { NextAuthConfig } from "next-auth"

import type { NextAuthConfig } from "next-auth"

import * as z from "zod";

import bcrypt from "bcryptjs";

import { LoginSchema } from "@/schemas";
import { findUserByUsername } from "@/data";
 
export default { 
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {

                    const { username, password } = validatedFields.data;
                    const existing_user = await findUserByUsername(username);

                    if (!existing_user || !existing_user.password) return null;

                    const password_match = await bcrypt.compare(password, existing_user.password);
                    if (password_match){
                        return existing_user;
                    }
                }

                return null;
            }
        })
    ] 
} satisfies NextAuthConfig