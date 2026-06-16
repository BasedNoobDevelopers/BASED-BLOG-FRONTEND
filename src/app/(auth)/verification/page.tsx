"use client"

import classes from './verification.module.css'
import { useRouter } from 'next/navigation'


export default function VerificationPage() {

    const router = useRouter();

    function handleFormSubmit(e){
        e.preventDefault();
        router.push('/login')
        console.log("Verifying...")
    }

    return (
        <form onSubmit={handleFormSubmit} className={classes.verificationPage} method="POST">
            <div className={classes.verification} id="verification">
                <div></div>
                <h2>A verifcation code was sent to your email</h2>
                <div>
                    <label htmlFor="verification-code"><h3>Enter Code:</h3></label>
                    <input type="text" title="verification-code"/>
                </div>
                <div className={classes.btnBox}>
                    <button  id="verify-btn" className={classes.button} type="submit">Verify</button>
                    <button id="resend-btn" className={classes.button} type="submit">Resend</button>
                </div>

              
            </div>
        </form>

    )
}