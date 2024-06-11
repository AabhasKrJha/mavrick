import { db } from "@/lib/db";

export const findIfUserExists = async (username : string, email : string) => {
    try {
        const existing_user = await db.user.findFirst({
            where: {
                OR: [
                    { email: email },  
                    { username: username }   
                ]
            }
        });
        return existing_user;
    } catch {
        return null;
    }
}

export const findUserById= async (id : string) => {
    try {
        const existing_user = await db.user.findUnique({
            where: { id: id }
        });
        return existing_user;
    } catch {
        return null;
    }
}