"use client"

/* eslint-disable @next/next/no-img-element */
import classes from './interests.module.css'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'

export default function InterestsPage() {

    const [selected, setSelected] = useState<string[]>([])


    const handleToggle = (interest: string) => {
        if (selected.includes(interest)) {
            setSelected(selected.filter((i) => i !== interest));
        } else if (selected.length < 5) {
            setSelected([...selected, interest])
        }
    }
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
                            <img className={classes.interestImg}
                                src='/assets/interests/gaming.svg'
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
                                checked={selected.includes('gaming')}
                                onChange={() => handleToggle('gaming')}
                            />
                            <div className={classes.interestTitle}> </div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-2">

                            <span className={classes.interestText}>TV/Movies</span>

                            <img
                                className={classes.interestImg}
                                src='/assets/interests/streaming.jpg'
                                alt="streaming"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-2"
                                name="interests"
                                type="checkbox"
                                value="streaming"
                                checked={selected.includes('streaming')}
                                onChange={() => handleToggle('streaming')}
                            />
                            <div className={classes.interestTitle} ></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-3">

                            <span className={classes.interestText}>Tech</span>
                            <img className={classes.interestImg}
                                src='/assets/interests/tech.jpg'
                                alt="Tech"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-3"
                                name="interests"
                                type="checkbox"
                                value="tech"
                                checked={selected.includes('tech')}
                                onChange={() => handleToggle('tech')}
                            />
                            <div className="interest-title"></div>
                        </label>


                        <label className={classes.formAnswer} htmlFor="interest-4">
                            <span className={classes.interestText}>Slice of Life</span>
                            <img
                                className={classes.interestImg}
                                src='/assets/interests/sliceoflife.jpg'
                                alt="Slice of Life"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-4"
                                name="interests"
                                type="checkbox"
                                value="slice-of-life"
                                checked={selected.includes('slice-of-life')}
                                onChange={() => handleToggle('slice-of-life')}
                            />
                            <div className="interest-title"></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-5">
                            <span className={classes.interestText}>Music</span>
                            <img className={classes.interestImg}
                                src='/assets/interests/music.jpg'
                                alt="Music"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-5"
                                name="interests"
                                type="checkbox"
                                value="music"
                                checked={selected.includes('music')}
                                onChange={() => handleToggle('music')}
                            />
                            <div className="interest-title"></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-6">
                            <span className={classes.interestText}>Anime/Manga</span>
                            <img className={classes.interestImg}
                                src='/assets/interests/manga.jpg'
                                alt="anime/manga"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-6"
                                name="interests"
                                type="checkbox"
                                value="anime/manga"
                                checked={selected.includes('anime/manga')}
                                onChange={() => handleToggle('anime/manga')}
                            />
                            <div className="interest-title"></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-7">
                            <span className={classes.interestText}>Sports</span>
                            <img className={classes.interestImg}
                                src='/assets/interests/sports.jpg'
                                alt="Sports"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-7"
                                name="interests"
                                type="checkbox"
                                value="sports"
                                checked={selected.includes('sports')}
                                onChange={() => handleToggle('sports')}
                            />
                            <div className="interest-title"></div>
                        </label>

                        <label className={classes.formAnswer} htmlFor="interest-8">
                            <span className={classes.interestText}>Art</span>
                            <img className={classes.interestImg}
                                src='/assets/interests/art.jpg'
                                alt="art"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-8"
                                name="interests"
                                type="checkbox"
                                value="art"
                                checked={selected.includes('art')}
                                onChange={() => handleToggle('art')}
                            />
                            <div className="interest-title"></div>
                        </label>
                        <label className={classes.formAnswer} htmlFor="interest-9">
                            <span className={classes.interestText}>Literature</span>
                            <img className={classes.interestImg}
                                src='/assets/interests/literature.jpg'
                                alt="literature"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-9"
                                name="interests"
                                type="checkbox"
                                value="literature"
                                checked={selected.includes('literature')}
                                onChange={() => handleToggle('literature')}
                            />
                            <div className="interest-title"></div>
                        </label>
                        <label className={classes.formAnswer} htmlFor="interest-10">
                            <span className={classes.interestText}>Misc/Other</span>
                            <img className={classes.interestImg}
                                src='/assets/interests/random.jpg'
                                alt="misc/other"
                            />
                            <input
                                className={classes.interestCheckbox}
                                id="interest-10"
                                name="interests"
                                type="checkbox"
                                value="misc/other"
                                checked={selected.includes('misc/other')}
                                onChange={() => handleToggle('misc/other')}
                            />
                            <div className="interest-title"></div>
                        </label>

                    </fieldset>

                    <div className={classes.stackFormControls}>
                        <button id="skip-btn" name="action" value="skip" title="Skip" className={classes.submitBtn} type="submit" data-cy="skip-btn">Skip</button>
                        <button id="continue-btn" name="action" value="continue" title="Continue" className={classes.submitBtn} type="submit" data-cy="continue-btn">Continue</button>
                    </div>


                </form>
            </div>
        </div >
    )
}