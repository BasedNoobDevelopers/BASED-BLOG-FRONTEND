import { getArticleById, articles } from '@/lib/articles';
import classes from './article.module.css'
import { notFound } from 'next/navigation';
//https://nextjs.org/docs/app/api-reference/functions/generate-static-params   

export function generateStaticParams() {
    return articles.map((a) => ({ id: String(a.id) }))
}



export default async function ArticlePage({ params }: { params: { id: string } }) {


    // params must have await 

    const { id } = await params;
    const article = getArticleById(Number(id));


    // Grab the first sentense
    const segments = new Intl.Segmenter('en', { granularity: 'sentence' })
    // const sentence = segments.segment({articles.content})

    if (!article) return notFound();


    return (
        <>
            <div className={classes.scrollHeader} id="scroll-header">
                <span id="scroll-title">{article.title}</span>
            </div>

            <section className={classes.articleHero}>
                <div className={classes.heroBackground} style={{ backgroundImage: ` url(${article.image})` }} id="hero-bg">
                </div>

                <div className={classes.heroContent}>
                    <div className={classes.heroMedia}>
                        <img
                            className={classes.heroMediaImage}
                            id="hero-image"
                            src={article.image}
                            alt="article image"


                        />
                    </div>

                    <div className={classes.heroText}>
                        <span className={classes.categoryTag} id="hero-category">{article.category}</span>
                        <h1 id="hero-title">{article.title}</h1>
                        <p className={classes.heroSubtitle} id="hero-subtitle">{article.subtitle}</p>
                        {/* <!-- <aside> --> */}
                        <p className={classes.heroAuthor} id="hero-author">{article.author}</p>
                        <p className={classes.uploadTime} id="upload-time">{article.uploadDate}</p>
                        {/* <!-- </aside>   --> */}
                    </div>
                </div>

            </section>

            <main className={classes.articleBody}>
                <div className={classes.articleContainer}>
                    <p className={classes.articleFirstParagraph}>{article.firstParagraph}</p>
                    <p className={classes.articleContent}>{article.content}</p>
                </div>
            </main>
        </>
    )
}


