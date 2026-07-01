"use client"
/* eslint-disable @next/next/no-img-element */
import classes from './carousel.module.css'
import { articles } from '@/lib/articles';
import { fetchLatest } from '@/app/api/blogs/controller/blog-api-controller';
import { useState } from 'react'


export default function UserCarousel() {

        const [currLatestArticles, setLatestArticles] = useState(articles)
        const [image, setImage] = useState(' ')
        const [found, setFound] = useState(false)
    
        async function getAllHandler() {
            const responseData = await fetchLatest();
            setLatestArticles(responseData);
            setFound(true)
        }
    
        if (found == undefined || found === false) {
            getAllHandler();
        }

    const cards = currLatestArticles.map((article) => (

        <div className={classes.card} key={ article.blogID ? article.blogID : Math.random() * 10000}>
            <a title="article" href={`/article/${article.blogID}`}>
                <img
                    className={classes.cardImg}
                    src={article.blogCoverImage ? article.blogCoverImage.imageUrl : 'https://media.tenor.com/HEIXykQDLEYAAAAM/interrogate-interrogation.gif'}
                    alt={article.blogTitle}
                />
                <div className={classes.cardOverlay}>
                    <h4>{article.blogTitle}</h4>
                    <span>{article.blogSubTitle}</span>
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