import Image from "next/image";
import Link from "next/link";
import classes from './navbar.module.css';
import navlogo from '@/public/assets/navbar-logo.png'


export default function UserNavbar() {
    return (
        <nav className={classes.nav}>
            <Link href="/">
                <Image
                    className={classes.navImg}
                    src={navlogo}
                    alt="Navbar logo"
                    width={80}
                    height={80}
                    loading="eager"
                />
            </Link>
            <header className={classes.header}>
                YOUNG BASED BLOG
            </header>
            <ul className="navPages">
                <li id="blogs-btn"><Link href="/create">Create Post</Link></li>
                <li id="login-btn"><Link className="login-nav" href="/logout"> Logout</Link></li>
                {/* <li id="user-profile"><Link className="user-nav" href="user.html"> Profile </Link></li> */}
            </ul>

            <input type="search" placeholder="search" />

        </nav>

    );
}