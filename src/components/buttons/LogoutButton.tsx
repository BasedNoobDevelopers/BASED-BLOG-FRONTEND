import { LogoutAuth } from "@/actions/auth";

export default function LogoutButton() {
    return(
        <form action={LogoutAuth}>
            <button type="submit">Log Out</button>
        </form>
    )
}