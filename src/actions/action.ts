"use server"
import { cookies } from "next/headers";

export async function ClearStateAction() {
    const cookieStore = await cookies();

    cookieStore.delete('auth_token');
}


export async function UsernameAction(){
    const cookieStore = await cookies();
    const cookie = cookieStore.get('username')

   
    const username = cookie ? cookie.value : undefined; // check if it exists
    return username;
}