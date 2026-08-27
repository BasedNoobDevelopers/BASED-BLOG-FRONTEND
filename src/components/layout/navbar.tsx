"use client"

import Image from "next/image";
import Link from "next/link";
import classes from './navbar.module.css';
import { useEffect, useState } from "react";

import { fetchMe } from "@/app/api/user/controller/user-controller";
// Change if user is signed in
//Fetch cookies, session, or token?

export default function Navbar() {

    const [response, setResponse] = useState(false)

    useEffect(() => {
        async function checkValidation() {
            const res = await fetchMe()
            setResponse(res.success)
        } checkValidation()
    }, [])




    return (

        <nav className={classes.nav}>
            {/* <UserProfile/> */}
            <Link href="/">
                <Image
                    className={classes.navImg}
                    src="/assets/navbar-logo.png"
                    alt="Navbar logo"
                    width={40}
                    height={40}
                    loading="eager"
                />

                <header className={classes.header}>
                    YOUNG BASED BLOG
                </header>
            </Link>
            {response ? (<>
                <ul className="navPages">
                    <li id="login-btn"><Link className="login-nav" href="/feed"> Feed</Link></li>
                    <li id="blogs-btn"><Link href="/create">Create Post</Link></li>
                    <li id="login-btn"><Link className="login-nav" href="/logout"> Logout</Link></li>

                    {/* <li id="user-profile"><Link className="user-nav" href="user.html"> Profile </Link></li> */}
                </ul>

            </>
            ) : (<>
                <ul className="navPages">
                    <li id="blogs-btn"><Link href="/">Blogs</Link></li>
                    <li id="login-btn"><Link className="login-nav" href="/login"> Login</Link></li>
                    <li id="register-btn"><Link className="register-nav" href="/registration"> Register</Link></li>
                    {/* <li id="user-profile"><Link className="user-nav" href="user.html"> Profile </Link></li> */}
                </ul>
            </>


            )}
            <input type="search" placeholder="search" />

        </nav>

    );
}