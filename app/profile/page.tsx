'use client';

import { useRouter } from 'next/navigation'; // or 'next/router' for older versions

// import { auth, signOut } from "@/auth";
import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";


function SignOutBtn(){
    return(
        <Button variant={"destructive"} onClick={() => signOut()}>Sign Out</Button>
    )
}

export default async function BlogPage(){
    // const session = await auth();
    // console.log(session);
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut(); // Your sign-out logic here
        router.push('/login'); // Redirect after sign-out
      };
    return(
        // <form
        // action={async () => {
        //     "use server"
        //     await signOut();
        //     return redirect('/login');
        // }}
        // >
        //     <button type="submit">Sign Out</button>
        // </form>
        <button onClick={handleSignOut}>
      Sign Out
    </button>
    )
}