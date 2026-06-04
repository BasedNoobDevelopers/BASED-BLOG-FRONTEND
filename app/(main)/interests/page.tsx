import classes from './interests.module.css'
import Image from 'next/image'
import ps4Controller from '@/assets/interests/PS4-Controller-1.svg'
import streaming from '@/assets/interests/streaming.jpg'

export default function InterestsPage() {
    return (
        <div>
            <div className={classes.cardFormContentBlock} data-cy="form-content-block">
                <form action="personalFeed.html" method="GET" className={classes.formContent}>
                    <fieldset id="interest-fieldset1" className={classes.interestFieldset} >

                        <legend className={classes.stack}>
                            <span className={classes.stack}>
                                <h2 className={classes.interestHeadline} id="form-question">
                                    Please select up to 5 interests from the list
                                </h2>
                            </span>
                        </legend>

                        <label className={classes.formAnswer} htmlFor="interest-1">
                            <span className={classes.interestText}>Gaming</span>
                            <Image className={classes.interestImg}
                                src={ps4Controller}
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
                            <div className={classes.interestTitle}>
                                <span></span> </div>
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


                    </fieldset>

                    <div className={classes.stackFormControls}>
                        <button id="skip-btn" name="action" value="skip" title="Skip" className={classes.submitBtn} type="submit" data-cy="skip-btn">Skip</button>
                        <button id="continue-btn" name="action" value="continue" title="Continue" className={classes.submitBtn} type="submit" data-cy="continue-btn">Continue</button>
                    </div>


                </form>
            </div>
        </div>
    )
}