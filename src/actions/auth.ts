"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function LogoutAuth() {
    const cookieStore = await cookies();

    cookieStore.delete('auth_token');

    redirect('/')

}

export async function CreateArticleAuth() {

    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    console.log("TOKEN", token)
    return !!token;
}