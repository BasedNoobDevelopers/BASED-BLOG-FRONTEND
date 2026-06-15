import { Article } from "@/models/Articles";
import classes from './articles.module.css'
import Image from "next/image";

const date = new Date();
const now = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
});

async function getArticleData(id: string): Promise<Article> {
    const articles = [{
        id,
        authorAvatar: "images/user-avatar-lime.jpg",
        author: "Joe Momma",
        title: "Super Mario Galaxy the Movie is a Hit!",
        uploadDate: now,
        category: "Random",
        subtitle: "The beginning of something big is right around the corner",
        image: "assets/SMB3_Artwork.webp",
        firstParagraph: `Happy Mario Galaxy weekend to those who celebrate. Granted, many were celebrating Easter and Passover this week, but theaters certainly had something to celebrate as well. This was the fourth-best Easter weekend ever for the top 10 at the box office.`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat posuere orci, ac lobortis erat porttitor sit amet. Donec vel facilisis nunc. Sed eu mauris venenatis, iaculis ante ut, tristique dolor. Proin auctor sagittis enim nec egestas. Aenean libero leo, mattis sed justo vitae, tincidunt sodales dolor. Nunc ullamcorper ullamcorper velit, ut sagittis odio rhoncus ac. Duis dapibus risus vitae felis malesuada, sit amet imperdiet neque scelerisque.
              Sed nibh massa, aliquet mollis nulla et, dictum malesuada tellus. Nulla vulputate nulla tortor, non lobortis nulla blandit vitae. Donec at mauris et nisi placerat tincidunt. Pellentesque facilisis, est sed blandit finibus, magna nulla porta nisi, quis lacinia ex turpis sit amet lacus. Mauris et convallis ipsum. Cras lacinia sit amet mi at sodales. Vestibulum gravida, odio sit amet consequat tristique, dolor mauris venenatis massa, non finibus lacus lorem eu mi. Nunc pharetra ac ante quis luctus. Donec nec neque maximus, consectetur risus et, auctor nisl. Aenean malesuada arcu orci, vitae lobortis urna condimentum nec.
              Nunc vel nibh nec mauris vehicula lacinia non et odio. Fusce porta arcu vitae urna faucibus, nec malesuada lectus aliquet. Suspendisse et venenatis lacus, ac accumsan lectus. Pellentesque dui elit, pellentesque at porta quis, vehicula eu arcu. Nunc pulvinar felis non nibh egestas ultricies. Nunc placerat, sem eu tincidunt fermentum, eros dui mollis nulla, sed vestibulum lorem quam eu nunc. Suspendisse imperdiet tristique vestibulum. Curabitur malesuada et felis et tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur consectetur augue non turpis tempor rutrum. Nulla a ipsum ut ipsum malesuada convallis sed vitae nisi. Aliquam ut consequat lorem. Proin quis tempor odio, ac porta quam. Suspendisse rhoncus odio lacus, aliquam suscipit risus consequat vitae.
              Nulla diam odio, venenatis viverra facilisis sit amet, vulputate sed mauris. Curabitur et neque ex. Sed vestibulum sit amet leo id malesuada. Fusce tempor, elit et tempus tempus, odio elit bibendum nisi, et imperdiet libero enim nec quam. Integer scelerisque tempor ex, ac bibendum mauris finibus nec. Vestibulum urna nulla, tristique nec lobortis in, pellentesque a ipsum. Nam lacinia dignissim est non convallis.
              Vivamus pharetra sed nisl eget laoreet. Ut ac tellus placerat, maximus enim nec, commodo ipsum. Etiam dolor arcu, congue vitae turpis eget, cursus tincidunt nibh. Duis sed tellus sed orci porta sagittis a at magna. Quisque sed massa eu ex dignissim mollis non consequat sem. Praesent congue lorem arcu, et dapibus purus faucibus eu. Sed convallis velit felis, ac posuere turpis dictum id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla finibus commodo purus eget venenatis. Vestibulum quis feugiat metus, nec finibus leo. Aliquam vel ipsum hendrerit, rhoncus orci nec, ultrices odio.`
    }
    ].map((articledetails) => {
        return new Article(articledetails)
    });
}


export default async function ArticlePage({ params }: { params: { id: string } }) {
    const article = await getArticleData(params.id)

    return (
        <>
            <div className={classes.scrollHeader} id="scroll-header">
                <span id="scroll-title">{article.title}</span>
            </div>

            <section className={classes.articleHero}>
                <div className={classes.heroBg} id="hero-bg">{article.image}</div>

                <div className={classes.heroContent}>
                    <div className={classes.heroMedia}>
                        <Image
                            id="hero-image"
                            src={article.image}
                            alt="article image"
                        />
                    </div>

                    <div className={classes.heroText}>
                        <span className={classes.categoryTag} id="hero-category"></span>
                        <h1 id="hero-title"></h1>
                        <p className={classes.subheading} id="hero-subtitle"></p>
                        {/* <!-- <aside> --> */}
                        <p id="hero-author"></p>
                        <p id="upload-time"></p>
                        {/* <!-- </aside>   --> */}
                    </div>
                </div>
            </section>

            <main className={classes.articleBody}>
                <div className={classes.articleContainer}>
                    <p id="article-first-paragraph"></p>
                    <p id="article-content"></p>
                </div>
            </main>
        </>

    )
}


