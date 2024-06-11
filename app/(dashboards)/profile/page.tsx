import { auth } from "@/auth";
import { LogoutBtn } from "@/components/auth/logout";

export default async function ProfilePage(){
    const session = await auth();
    const name = session?.user.name;
    const username = session?.user.username;
    const email = session?.user.email;
    return(
        <div className="p-10">
            <LogoutBtn/>
        </div>
    )
}