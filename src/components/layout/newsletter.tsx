import classes from './newsletter.module.css'
import SubmitBtn from '../ui/submit-button';
export default function Newsletter() {
    return (
        <>
            <div className={classes.newsletter}>


                <p>Get weekly articles and gaming insights.</p>

                <form>

                    <input type="email" placeholder="Enter your email" />

                    <SubmitBtn/>

                </form>

            </div>
        </>
    );
}