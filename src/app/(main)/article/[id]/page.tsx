import { getArticleById, articles } from '@/lib/articles';
import classes from './article.module.css'
import { notFound } from 'next/navigation';
import { fetchByID } from '@/app/api/blogs/controller/blog-api-controller';
//https://nextjs.org/docs/app/api-reference/functions/generate-static-params   



export default async function ArticlePage({ params }: { params: { id: string } }) {


    // params must have await 

    const { id } = await params;
    let article = undefined

    async function getArticleByIDHandler(){

        const response = await fetchByID(id)
        const result = response
        result.createdDate = new Date(result.createdDate)
        const now = result.createdDate.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
        result.createdDate = now
        article = result
        const startIndex = article.blogContent.search(/[.?!]/)
        article.firstSentence = article.blogContent.substring(0, startIndex + 1).trim()
        article.blogContent = article.blogContent.substring(startIndex + 1).trim()
    }
    if (!article) await getArticleByIDHandler();


    return (
        <>
            <div className={classes.scrollHeader} id="scroll-header">
                <span id="scroll-title">{article.blogTitle}</span>
            </div>

            <section className={classes.articleHero}>
                <div className={classes.heroBackground} style={{ backgroundImage: ` url(${article.blogCoverImage ? article.blogCoverImage.imageUrl : "https://image-service-bucket-based.s3.us-east-2.amazonaws.com/test_1781649686735_AVATAR_BruceLee.jpg"})` }} id="hero-bg">
                </div>

                <div className={classes.heroContent}>
                    <div className={classes.heroMedia}>
                        <img
                            className={classes.heroMediaImage}
                            id="hero-image"
                            src={article.blogCoverImage ? article.blogCoverImage.imageUrl : "https://image-service-bucket-based.s3.us-east-2.amazonaws.com/test_1781649686735_AVATAR_BruceLee.jpg'"}
                            alt="article image"


                        />
                    </div>

                    <div className={classes.heroText}>
                        <span className={classes.categoryTag} id="hero-category">{article.blogTopic}</span>
                        <h1 id="hero-title">{article.blogTitle}</h1>
                        <p className={classes.heroSubtitle} id="hero-subtitle">{article.blogSubTitle}</p>
                        {/* <!-- <aside> --> */}
                        <p className={classes.heroAuthor} id="hero-author">{article.publicUserResponseDTO ? article.publicUserResponseDTO.userName : ""}</p>
                        <p className={classes.uploadTime} id="upload-time">{article.createdDate}</p>
                        {/* <!-- </aside>   --> */}
                    </div>
                </div>

            </section>

            <main className={classes.articleBody}>
                <div className={classes.articleContainer}>
                    <p className={classes.articleFirstParagraph}>{article.firstSentence}</p>
                    <p className={classes.articleContent}>{article.blogContent}</p>
                    {/* <p className={classes.articleContent}>{article.blogContent ? article.blogContent.map((line: string) => {
                        if(line == ""){
                         return  <><br  key={line} />  <br  key={line} /></>
                        } else {
                            return "\t" + line 
                        }
                    }) : ""}</p> */}
                </div>
            </main>
        </>
    )
}


