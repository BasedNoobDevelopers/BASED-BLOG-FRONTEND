"use client"

import classes from './login.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {

    const router = useRouter();
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [imageURL, setImageURL] = useState(' ')
    

    
    

    async function handleFormSubmit(e:any) {
        e.preventDefault()
        const url = "login"
        const body = {username, password, url}
    

        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })

        const result = await response.json();
        console.log(result)
    
        router.push('/interests')

    }
    return (
        <div>
            <form onSubmit={handleFormSubmit} className={classes.loginPage}>
                <div className={classes.login}>
                    <h3>Welcome back!</h3>


                    <label htmlFor="first-name">
                        <h2 className={classes.loginHeadline} id="form-question">
                            Username
                        </h2>
                    </label>
                    <input type="text" title="first-name" onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="last-name">
                        <h2 className={classes.loginHeadline} id="form-question">
                            Password
                        </h2>
                    </label>
                    <input title="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            
                    <div className={classes.btnBox}>
                        <button className="login-btn2" id="submit-btn" type="submit">Login</button>
                    </div>

                    <p> Do not have an account?</p>
                    <Link href="/registration"><p>Click here to register</p> </Link>
                </div>
            </form>

        </div>
    )

}