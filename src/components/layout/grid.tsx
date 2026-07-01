"use client"
/* eslint-disable @next/next/no-img-element */
import classes from './grid.module.css'
import { articles } from '@/lib/articles';
import { fetchAll } from '@/app/api/blogs/controller/blog-api-controller';
import { useState } from 'react'



export default function HomeGrid() {

    const [currArticles, setArticles] = useState(articles)
    const [image, setImage] = useState('https://media.tenor.com/HEIXykQDLEYAAAAM/interrogate-interrogation.gif')
    const [found, setFound] = useState(false)

    async function getAllHandler() {
        const responseData = await fetchAll();
        setArticles(responseData.content);
        setFound(true)
    }

    if (found == undefined || found === false) {
        getAllHandler();
    }

    const cards = currArticles.map((article) => (

        <div className={classes.blogCard} key={article.blogID ? article.blogID : Math.random() * 10000}>
            <a href={`/article/${article.blogID}`}>
                <div className={classes.innerBlog}>
                    <div className={classes.titleDiv}>
                        <h1 className={classes.blogTitle}>{article.blogTitle}</h1>
                        <div className={classes.imgDiv}>
                            <img
                                className={classes.blogImage}
                                src={article.blogCoverImage == undefined ? image : article.blogCoverImage.imageUrl}
                                alt={article.blogTitle}
                            />
                        </div>
                        <p className={classes.blogSubtitle}>{article.blogSubTitle}</p>
                    </div>
                </div>
            </a>
        </div>

    ))

    const grid1 = cards.slice(0,3)
    const grid2 = cards.slice(3,6)
    const grid3 = cards.slice(6,9)

    

    return(

          <div className={classes.content}>
        <section className={classes.blogSection}>
            <div className={classes.blogGrid} id="blogGrid1">{grid1}</div>
            <div className={classes.blogGrid} id="blogGrid2">{grid2}</div>
            <div className={classes.blogGrid} id="blogGrid3">{grid3}</div>
        </section>
    </div>
    )

}