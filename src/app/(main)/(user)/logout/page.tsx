
"use client"
import classes from './logout.module.css'
// import Link from 'next/link'
import { LogoutAuth} from '@/actions/auth';
import { useRouter } from 'next/navigation'
// import LogoutButton from '@/components/buttons/LogoutButton';

export default function LogoutPage() {

    const router = useRouter();

    function handleFormSubmit(e) {
        e.preventDefault();
        LogoutAuth();
        router.push('/');
        console.log("Logging out...")
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} className={classes.logoutPage} action={LogoutAuth} >
                <div className={classes.logout}>
                    <h3>Logging out?</h3>

                    <div className={classes.btnBox}>
                        <button id="logout" type="submit">Yes</button>

                    </div>

                </div>
            </form>

        </div>
    )

}