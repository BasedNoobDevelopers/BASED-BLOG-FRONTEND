/* eslint-disable @next/next/no-img-element */
import classes from './carousel.module.css'
import { articles } from '@/lib/articles';


export default function UserCarousel() {

    const cards = articles.map((article) => (

        <div className={classes.card} key={article.id}>
            <a title="article" href={`/article/${article.id}`}>
                <img
                    className={classes.cardImg}
                    src={article.image}
                    alt={article.title}
                />
                <div className={classes.cardOverlay}>
                    <h4>{article.title}</h4>
                    <span>{article.subtitle}</span>
                    {/* <span>{article.author}</span> */}
                </div>
            </a>
        </div>
    ))

    return (
        <div className={classes.carousel}>
            <div className={classes.group} id="group-duplicate" aria-hidden="true">
                {cards}
            </div>
            <div className={classes.group} id="group-duplicate" aria-hidden="true">
                {cards}
            </div>
        </div>
    );
}