import MusicPlayer from "@/components/ui/music-player"
import OnlineUsers from "@/components/ui/online-users"
// import TrendingArticles from "@/components/ui/trending-articles"
// import Topics from "@/components/ui/topics"
import classes from './feed.module.css'

export default function UserFeedPage() {
    return (
        <>
            <div className={classes.personalFeedLayout}>

                <div className={classes.personalFeedLeft}>
                    <div className={classes.personalArticlesList1}>



                    </div>
                </div>
                <div className={classes.personalFeedRight}>
                    <OnlineUsers />
                    {/* <TrendingArticles />

                    <Topics /> */}
                    <MusicPlayer />

                </div>

            </div>
        </>
    )
}