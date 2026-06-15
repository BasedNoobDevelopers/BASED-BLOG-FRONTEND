"use client"

import classes from './carousel.module.css'

const date = new Date();
const now = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
});

const article =
{
    id: 2,
    author: "Rick Flair",
    title: "Sonic the Hedgehog 25th Anniversary",
    uploadDate: now,
    category: "Opinion",
    subtitle: "The beginning of something big is right around the corner",
    image: "assets/mock/SonicConcept5.png",
    firstParagraph: `During the Sonic the Hedgehog 25th Anniversary event over in Japan, Sonic Team presented early concepts for Sonic the Hedgehog and Friends.`,
    content: ` Some of the weirdest early prototypes included rabbit Sonic the Hedgehog, headband wearing Silver the Hedgehog and scarred up Shadow the Hedgehog. If you are a hedgehog, you started out with some weird designs.
    Check out the concept art for Sonic the Hedgehog and Friends below. Tell us what you think of these early concept art prototypes and if they did right with the final designs. Of course, these are just more of the popular Sonic the Hedgehog and Friends designs as they didn’t show a lot of the more niche characters (Fang, please Sonic Team).
    [Via NeoGAF]`
}
export default function UserCarousel() {


    return (
        <div className={classes.carousel}>
            <div className={classes.group} id="group-duplicate" aria-hidden="true">
                <div className={classes.card}>
                    <a title="article" href="/article">
                        <img
                            className={classes.cardImg}
                            src={article.image}
                            alt={article.title} 
                        />
                        <div className={classes.cardOverlay}>
                            <h4>{article.title}</h4>
                            <span>{article.subtitle}</span>
                            <span>{article.author}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}