"use client"
import classes from './registration.module.css'
import Image from 'next/image'
import Link from 'next/link'
import userAvatar from '@/assets/user-avatar-var.jpg'




export default function RegistrationPage() {

    function handleSubmit(e) {
        e.preventDefault()


        console.log("Sending...")
    }


    return (
        <>

            <form className={classes.registrationForm} onSubmit={handleSubmit} action="/register" method="POST">
               
                <div className={classes.registration}>
            <h3 className={classes.h3}>Join the community!</h3>

                    <div className={classes.registrationRow}>
                        <div className={classes.userInput}>
                            <div className={classes.inputContainer}>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" title="first-name" aria-placeholder="Please enter your first name" />
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" title="last-name" aria-placeholder="Please enter your last name" />


                                <label htmlFor="username"> Username</label>
                                <input type="text" title="user-name" aria-placeholder="Please enter a username" />
                                <label htmlFor="email">Email</label>
                                <input type="text" title="email" aria-placeholder="Please enter an email address" />


                                <label htmlFor="password">Password</label>
                                <input type="password" title="enter-password" aria-placeholder="Please enter a password" />
                                <label htmlFor="password-reenter">Re-enter Password</label>
                                <input type="password" title="reenter-password" aria-placeholder="Please re-enter your password" />
                            </div>
                        </div>
                        <div className={classes.rightBox}>
                            <h2>Upload Avatar</h2>
                            <div className={classes.imageBox}>
                                <label htmlFor="file-path">
                                    <Image
                                        src={userAvatar}
                                        id="registration-img"
                                        className="registration-img"
                                        height={210}
                                        width={240}
                                        alt="User Avatar"
                                    />
                                </label>
                            </div>
                            <p>(optional)</p>
                            <input hidden title="avatar button" type="file" accept="image/jpeg, image/png, image/jpg" id="file-path" />
                        </div>
                        {/* <!-- <span className="material-symbols-outlined">
                                    photo_camera_front
                                </span>
                        optional --> */}



                    </div>

                    <div className={classes.registrationLogin}>
                        <button
                            id="signup-btn"
                            className="submit-btn"
                            type="submit">
                            Sign Up
                        </button>

                        <p>Already have an account?</p>
                        <Link href="/login">
                            <p>Click here to login</p>
                        </Link>

                    </div>

                </div>

            </form >

        </>

    )
}