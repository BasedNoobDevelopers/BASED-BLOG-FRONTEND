"use client"

import classes from './verification.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

//  TO-DO LATER --------------- Countdown timer for verification code
//  function Countdown({ initialSeconds = 60 }) {
//     const [secondsLeft, setSecondsLeft] = useState(initialSeconds)

//     useEffect(() => {
//         if (secondsLeft <= 0) return;

//         const timerId = setInterval(() => {
//             setSecondsLeft((prevTime) => prevTime - 1)
//         }, 1000);

//         return () => clearInterval(timerId);
//     }, [secondsLeft]);


//     const formatTime = (totalSeconds) => {
//         const min = Math.floor(totalSeconds / 60);
//         const sec = totalSeconds % 60;
//         return `${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`;
//     }
//     return (
//         <h4 className="countdown-text" >
//             {secondsLeft > 0 ? `Time remaining: ${formatTime(secondsLeft)}` : "Resend Code"}
//         </h4>
//     )
// }


export default function VerificationPage() {

    const router = useRouter();

    function handleFormSubmit(e) {
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
                    <label htmlFor="email"><h3>Enter Email</h3></label>
                    <input type="text" title="email" />
                </div>
                <div>
                    <label htmlFor="verification-code"><h3>Enter Code</h3></label>
                    <input type="text" title="verification-code" />
                </div>

                <h4>Your code is available for 10 minutes</h4>
                {/* <Countdown initialSeconds={600} /> */}
                <div className={classes.btnBox}>
                    <button id="verify-btn" className={classes.button} type="submit">Verify</button>
                    <button id="resend-btn" className={classes.button} type="submit">Resend</button>
                </div>


            </div>
        </form>

    )
}