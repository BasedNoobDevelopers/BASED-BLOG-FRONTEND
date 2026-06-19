/* eslint-disable @next/next/no-img-element */

"use client"

import classes from './carousel.module.css'
import { articles, fetchLatest } from '@/lib/articles';
import { useState } from 'react';


export default function UserCarousel() {

     const [currArticles, setArticles] = useState(articles)
        const [image, setImage] = useState(' ')
        const [found, setFound] = useState (false)
        async function test() {
            console.log("HEREHRERE")
            const testData = await fetchLatest();
            setArticles(testData)
            setImage("Test")
            setFound(true)
            setArticles(testData)
        }
        if (!found) test();

    const cards = currArticles.map((article) => (

        <div className={classes.card} key={article.blogID}>
            <a title="article" href={`/article/${article.blogID}`}>
                <img
                    className={classes.cardImg}
                    src={article.blogCoverImage ? article.blogCoverImage.imageUrl : ''}
                    alt={article.blogTitle}
                />
                <div className={classes.cardOverlay}>
                    <h4>{article.blogTitle}</h4>
                    <span>{article.blogSubTitle}</span>
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