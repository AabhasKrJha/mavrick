import NextAuth from "next-auth"
import authConfig from "@/auth.config"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { findUserById } from "@/data"

import { db } from "./lib/db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks : {

    async session({ token, session }){
      if (token.sub && session.user){
        session.user.id = token.sub;
      }
      if (token.username && session.user){
        session.user.username = token.username as string;
      }
      if (token.role && session.user){
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;
      const existing_user = await findUserById(token.sub);
      if (!existing_user) return token;
      token.role = existing_user.role;
      token.username = existing_user.username;
      return token;
    }
    
  },
  
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})