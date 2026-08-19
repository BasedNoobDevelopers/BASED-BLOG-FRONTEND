
"use client"
import classes from './logout.module.css'
// import Link from 'next/link'
import { LogoutAction} from '@/actions/action';
import { logout } from '@/app/api/auth/controller/authController';
import { useRouter } from 'next/navigation'
// import LogoutButton from '@/components/buttons/LogoutButton';

export default function LogoutPage() {

    const router = useRouter();

    async function handleFormSubmit(e) {
        e.preventDefault();
        await logout();
        await LogoutAction();
        router.push('/');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} className={classes.logoutPage} >
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