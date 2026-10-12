
"use client"
import classes from './logout.module.css'
import { logout } from '@/app/api/auth/controller/authController';

export default function LogoutPage() {
    async function handleLogout() {
        await logout();
        window.location.replace('/')

    };

    return (
        <div>
            <div className={classes.logoutPage} >
                <div className={classes.logout}>
                    <h3>Logging out?</h3>

                    <div className={classes.btnBox}>
                        <button onClick={handleLogout} id="logout">Yes</button>

                    </div>

                </div>
            </div>

        </div>
    )

}