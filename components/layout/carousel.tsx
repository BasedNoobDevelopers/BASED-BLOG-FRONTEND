import classes from './carousel.module.css'

export default function Carousel() {
    return (
        <div className={classes.carousel}>
            <div className="group" id="group"></div>
            <div className="group" id="group-duplicate" aria-hidden="true"></div>
        </div>
    );
}