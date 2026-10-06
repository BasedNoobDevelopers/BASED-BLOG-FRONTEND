"use client"

import classes from './verification.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { verfication, verificationResend } from '@/app/api/auth/controller/authController';


export default function VerificationPage() {

    const router = useRouter();

    const [email, setEmail] = useState(" ")
    const [verificationCode, setVerificationCode] = useState(" ")

    async function handleFormSubmit(e:any) {
        e.preventDefault();
        if (!verificationCode) {
            alert("Please enter verification code")
            return;
        }

        const response = await verfication({email, verificationCode})
        if (!response) {
            alert("Please retry")
            return;
        }


       if (response.statusCode >= 400) {
            alert(response.message)
            if (!response.message.includes("Is Already Verified")) {
                return;
            }
        }

        router.push("/login")
    }

    async function handleResend(e: any) {
        e.preventDefault();
        if (!email) {
            alert("Please enter email")
            return;
        }

        const response = await verificationResend({email})
        if (!response) {
            alert("Please retry")
            return;
        }



        if (response.statusCode >= 400) {
            alert(response.message)
            if (!response.message.includes("Is Already Verified")) {
                return;
            }
            router.push("/login")
        }

        alert("Verification resent to email")
        
    }

    return (
        <form onSubmit={handleFormSubmit} className={classes.verificationPage} method="POST">
            <div className={classes.verification} id="verification">
                <div></div>
                <h2>A verifcation code was sent to your email</h2>
                <div>
                    <label htmlFor="email"><h3>Enter Email</h3></label>
                    <input type="email" title="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="verification-code"><h3>Enter Code</h3></label>
                    <input type="text" title="verification-code" onChange={(e) => setVerificationCode(e.target.value)} />
                </div>

                <h4>Your code is available for 10 minutes</h4>
                
                <div className={classes.btnBox}>
                    <button id="verify-btn" className={classes.button} type="submit">Verify</button>
                    <button id="resend-btn" onClick={handleResend} className={classes.button} type="submit">Resend</button>
                </div>


            </div>
        </form>

    )
}