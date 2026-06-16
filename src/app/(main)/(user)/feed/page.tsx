import MusicPlayer from "@/components/ui/music-player"
import OnlineUsers from "@/components/ui/online-users"
import PersonalFeedArticles from "@/components/layout/feedarticles"
// import TrendingArticles from "@/components/ui/trending-articles"
// import Topics from "@/components/ui/topics"
import classes from './feed.module.css'

export default function UserFeedPage() {
    return (
        <>
            <div className={classes.personalFeedLayout}>

                <div className={classes.personalFeedLeft}>


                    <PersonalFeedArticles />

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