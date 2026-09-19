import classes from "./not-found.module.css"
interface NotFoundProps{
    message?:string;
}
export default function NotFound({message} : NotFoundProps ){

    return (
        <div>
            <main className="not-found">
                <h3>PAGE NOT FOUND</h3>
                <h2 className={classes.h2}>{message|| "The page you are looking for does not exist"}</h2>
            </main>
        </div>

    )
}