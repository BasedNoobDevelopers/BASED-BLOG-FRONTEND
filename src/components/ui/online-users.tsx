//check active session tokens? check time ----------
import classes from './online-users.module.css'


export default function OnlineUsers() {

    return (
        <>
            <div className={classes.onlineUsersList}>
                <h3>users-online</h3>
                <div className={classes.personalFeedRightGrid}>
                    <div className={classes.onlineUsersCard}>
                        <img src="assets/user-avatar-lime.jpg" alt="users-online-name" />
                        <h2>Jones99</h2>
                        <p>Online</p>
                    </div>
                    <div className={classes.offlineUsersCard}>
                        < img src="assets/user-avatar-magenta.jpg" alt="users-online-name" />
                        <h2>Rusty-Tin</h2>
                        <p>Offline</p>
                    </div >
                </div >
            </div >

        </>
    )
}