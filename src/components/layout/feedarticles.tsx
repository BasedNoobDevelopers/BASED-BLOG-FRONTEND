import { articles } from "@/lib/articles"
import classes from './feedarticles.module.css'


export default function PersonalFeedArticles() {

    const card = articles.map((article) => (
        <div  key={article.id}>
            <a title="article" href={`/article/${article.id}`}>
                <div className={classes.personalArticleDiv}>
                    <div className={classes.personalArticleDivInner}>
                        <div className={classes.personalArticleLeftTop}>
                            <div className={classes.personalArticleAuthor}>
                                <img 
                                    className={classes.authorAvatar} 
                                    src={article.authorAvatar} 
                                    alt={article.author} 
                                />
                                <p> {article.author}</p>
                                <p> {article.uploadDate}</p>
                            </div>
                            <div className={classes.personalArticleLeftTitle}>
                                <h1>{article.title}</h1>
                            </div>
                        </div>
                        <div className={classes.personalArticleLeftBottom}>
                            <div className={classes.personalArticleLeftSubtitle}>
                                <h2>{article.subtitle}</h2>
                            </div>
                        </div>

                    </div>
                    <div className={classes.personalArticleImgDiv}>
                        <img 
                            className={classes.personalArticleImg} 
                            src={article.image} 
                            alt={article.title} 
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