import { LogoutAction } from "@/actions/action";

export default function LogoutButton() {
    return(
        <form action={LogoutAction}>
            <button type="submit">Log Out</button>
        </form>
    )
}