import NextAuth, { type DefaultSession } from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
    role : "ADMIN" | "USER", 
    username : string,
    name : string,
    email : string
}

declare module "next-auth" {
    interface Session {
      user: ExtendedUser
    }
  }