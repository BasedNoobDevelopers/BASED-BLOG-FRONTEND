import classes from './interests.module.css'
// import { useRouter } from 'next/navigation'
import Image from 'next/image'
import gaming from '@/public/assets/interests/gaming.svg'
import streaming from '@/public/assets/interests/streaming.jpg'
import tech from '@/public/assets/interests/tech.jpg'
import sports from '@/public/assets/interests/sports.jpg'
import music from '@/public/assets/interests/music.jpg'
import life from '@/public/assets/interests/sliceoflife.jpg'
import manga from '@/public/assets/interests/manga.jpg'



export default function InterestsPage() {
    // const router = useRouter()
   

    // const  handleInterestSubmit = (e) => {
    //     e.preventDefault();
    //      router.push('/create')
    // }

    return (
        <div>
            <div className={classes.cardFormContentBlock} data-cy="form-content-block">
                <form action="personalFeed.html" method="GET" className={classes.formContent}>
                    <fieldset id="interest-fieldset1" className={classes.interestFieldset} >

                        <legend className={classes.stack}>
                            <span className={classes.interestHeadline}>
                                <h2 id="form-question">
                                    Please select up to 5 interests from the list
                                </h2>
                            </span>
                        </legend>

                        <label className={classes.formAnswer} htmlFor="interest-1">
                            <span className={classes.interestText}>Gaming</span>
                            <Image className={classes.interestImg}
                                src={gaming}
                                alt="PS4"
                                height={210}
                                width={240}
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-1"
                                title="img1"
                                type="checkbox"
                                name="interests"
                                value="gaming"
                            />
                            <div className={classes.interestTitle}> </div>
                        </label>
                        <label className={classes.formAnswer} htmlFor="interest-2">

                            <span className={classes.interestText}>Streaming</span>

                            <Image
                                className={classes.interestImg}
                                src={streaming}
                                height={210}
                                width={240}
                                alt="streaming"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-2"
                                name="interests"
                                type="checkbox"
                                value="streaming"
                            />
                            <div className={classes.interestTitle} ></div>
                        </label>
                        <label className={classes.formAnswer} htmlFor="interest-3">

                            <span className={classes.interestText}>Tech</span>
                            <Image className={classes.interestImg}
                                src={tech}
                                alt="Tech" />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-3"
                                name="interests"
                                type="checkbox"
                                value="tech"
                            />
                            <div className="interest-title"></div>
                        </label>


                        <label className={classes.formAnswer} htmlFor="interest-4">
                            <span className={classes.interestText}>Slice of Life</span>
                            <Image
                                className={classes.interestImg}
                                src={life}
                                alt="Slice of Life" />
                            <input className={classes.interestCheckbox}
                                id="interest-4"
                                name="interests"
                                type="checkbox"
                                value="slice-of-life" />
                            <div className="interest-title"></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-5">
                            <span className={classes.interestText}>Music</span>
                            <Image className={classes.interestImg}
                                src={music}
                                alt="Music" />
                            <input className={classes.interestCheckbox}
                                id="interest-5"
                                name="interests"
                                type="checkbox"
                                value="music" />
                            <div className="interest-title"></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-6">
                            <span className={classes.interestText}>Manga</span>
                            <Image className={classes.interestImg}
                                src={manga}
                                alt="Manga" />
                            <input className={classes.interestCheckbox}
                                id="interest-6"
                                name="interests"
                                type="checkbox"
                                value="manga" />
                            <div className="interest-title"></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-7">
                            <span className={classes.interestText}>Sports</span>
                            <Image className={classes.interestImg}
                                src={sports}
                                alt="Sports" />
                            <input className={classes.interestCheckbox}
                                id="interest-7"
                                name="interests"
                                type="checkbox"
                                value="sports" />
                            <div className="interest-title"></div>
                        </label>



                    </fieldset>

                    <div className={classes.stackFormControls}>
                        <button id="skip-btn" name="action" value="skip" title="Skip" className={classes.submitBtn} type="submit" data-cy="skip-btn">Skip</button>
                        <button  id="continue-btn" name="action" value="continue" title="Continue" className={classes.submitBtn} type="submit" data-cy="continue-btn">Continue</button>
                    </div>


                </form>
            </div>
        </div >
    )
}