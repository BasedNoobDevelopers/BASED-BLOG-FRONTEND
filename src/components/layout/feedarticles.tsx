"use client"

/* eslint-disable @next/next/no-img-element */
import classes from './feedarticles.module.css'
import { fetchMyFeed } from "@/app/api/user/controller/user-controller"
import { useState } from "react"


export default function PersonalFeedArticles() {

    const [currArticles, setArticles] = useState([])
    const [image, setImage] = useState('https://media.tenor.com/HEIXykQDLEYAAAAM/interrogate-interrogation.gif')
    const [found, setFound] = useState(false)

    async function getAllHandler() {
        const responseData = await fetchMyFeed();
        setArticles(responseData.content);
        console.log(responseData.content)
        setFound(true)
    }

    if (found == undefined || found === false) {
        getAllHandler();
    }

    const card = currArticles.map((article) => (
        <div  key={article.blogID ? article.blogID : Math.random() * 10000}>
            <a title="article" href={`/article/${article.blogID}`}>
                <div className={classes.personalArticleDiv}>
                    <div className={classes.personalArticleDivInner}>
                        <div className={classes.personalArticleLeftTop}>
                            <div className={classes.personalArticleAuthor}>
                                <img 
                                    className={classes.authorAvatar} 
                                    src={article.publicUserResponseDTO.imageResponseDTO.imageUrl} 
                                    alt={article.publicUserResponseDTO.userName} 
                                />
                                <p> {article.publicUserResponseDTO.userName}</p>
                                <p> {article.createdDate}</p>
                            </div>
                            <div className={classes.personalArticleLeftTitle}>
                                <h1>{article.blogTitle}</h1>
                            </div>
                        </div>
                        <div className={classes.personalArticleLeftBottom}>
                            <div className={classes.personalArticleLeftSubtitle}>
                                <h2>{article.blogSubTitle}</h2>
                            </div>
                        </div>

                    </div>
                    <div className={classes.personalArticleImgDiv}>
                        <img 
                            className={classes.personalArticleImg} 
                            src={article.blogCoverImage.imageUrl} 
                            alt={article.blogTitle} 
                        />
                    </div>
                </div>
            </a>
        </div>

    ))
    return (
         <div className={classes.personalArticlesList1}>
            {card}
        </div>
    )
}