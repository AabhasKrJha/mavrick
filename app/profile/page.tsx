'use client';

import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button";

export default async function BlogPage(){
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut(); 
        router.push('/login'); 
      };
    return(
        <button onClick={handleSignOut}>
      Sign Out
    </button>
    )
}