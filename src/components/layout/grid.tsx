/* eslint-disable @next/next/no-img-element */
import classes from './grid.module.css'
import { articles } from '@/lib/articles';



export default function HomeGrid() {

    const cards = articles.map((article) => (

        <div className={classes.blogCard} key={article.id}>
            <a href={`/article/${article.id}`}>
                <div className={classes.innerBlog}>
                    <div className={classes.titleDiv}>
                        <h1 className={classes.blogTitle}>{article.title}</h1>
                        <div className={classes.imgDiv}>
                            <img
                                className={classes.blogImage}
                                src={article.image}
                                alt={article.title}
                            />
                        </div>
                        <p className={classes.blogSubtitle}>{article.subtitle}</p>
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