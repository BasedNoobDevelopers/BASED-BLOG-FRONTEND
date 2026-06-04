import classes from './footer.module.css'


export default function Footer() {
    return (
        <>
            <footer className={classes.footer}>

                <div className={classes.footerGrid}>


                    <div className={classes.footerBrand}>

                        <h2 className={classes.footerLogo}>Young Based Blog</h2>
                        <p>
                            Get Based
                        </p>
                    </div>
                    {/* <div className="footer-social">

                            <a href="#">Twitter</a>
                            <a href="#">YouTube</a>
                            <a href="#">Discord</a>
                            <a href="#">GitHub</a>

                        </div> */}

                    <div className={classes.footerBottom}>

                        <p>© 2026 YoungBasedBlog </p>

                        <div className={classes.footerLegal}>

                            <a href="/privacy">Privacy</a>
                            <a href="/terms">Terms</a>
                            <a href="/contact">Contact</a>

                        </div>

                    </div>


                </div>
            </footer>
        </>
    );
}