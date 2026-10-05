"use server"
import { cookies } from "next/headers";

export async function UsernameAction() {
    const cookieStore = await cookies();
    const cookie = cookieStore.get('username')
    const username = cookie ? cookie.value : undefined;
    return username;
}