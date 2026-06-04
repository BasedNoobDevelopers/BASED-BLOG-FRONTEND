import classes from './login.module.css'
import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <form className={classes.loginPage}  action="interestPage.html" method="POST">
            <div className={classes.login}>
                <h3>Welcome back!</h3>


                <label htmlFor="first-name">
                    <h2 className={classes.loginHeadline} id="form-question">
                        Username
                    </h2>
                </label>
                <input type="text" title="first-name"/>

                    <label htmlFor="last-name">
                        <h2 className={classes.loginHeadline} id="form-question">
                            Password
                        </h2>
                    </label>
                    <input title="password" type="password"/>
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