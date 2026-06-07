
"use client"
import classes from './logout.module.css'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {

    const router = useRouter();

    function handleFormSubmit(e) {
        e.preventDefault();
        router.push('/')
        console.log("Logging out...")

    }
    return (
        <div>
            <form onSubmit={handleFormSubmit} className={classes.logoutPage} action="interestPage.html" method="POST">
                <div className={classes.logout}>
                    <h3>Logging out?</h3>


                    <div className={classes.btnBox}>
                        <button id="logout" type="submit">Yes</button>
                        <button id="back" type="reset">No</button>

                    </div>

                </div>
            </form>

        </div>
    )

}