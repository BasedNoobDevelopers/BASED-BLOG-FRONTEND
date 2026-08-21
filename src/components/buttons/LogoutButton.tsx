import {ClearStateAction} from "@/actions/action";

export default function LogoutButton() {
    return(
        <form action={ClearStateAction}>
            <button type="submit">Log Out</button>
        </form>
    )
}