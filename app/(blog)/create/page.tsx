"use client"
import { useState } from "react";
import Image from "next/image";
import classes from './create.module.css'

export default function CreateBlogPostPage() {

    // const [count, setcount] = useState(0);
    const [imageUrl, setImageUrl] = useState('/assets/checkerboard.svg')

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setImageUrl(objectUrl)
        }
    };

    const updateCount = (e) => {


    }


    return (
        <div className={classes.createArticlePage}>
            <form className={classes.createArticleForm} action="/createArticle" method="post">
                <div className={classes.createArticle}>
                    <h3>Add your article to the site</h3>

                    <div className={classes.createArticleRow}>
                        <div className={classes.createArticleUserInput}>

                            <div className={classes.createArticleInputContainer}>
                                <label htmlFor="articleTitle">Article title</label>
                                <input id="articleTitleUpload" name="articleTitle" title="articleTitle" maxLength={50}
                                    spellCheck="true" onInput={updateCount()}
                                    aria-placeholder="Please enter your artiicle title"></input>
                                <p><span id="current1">0</span> / 50 characters</p>

                                <label htmlFor="articleSubtitle">Article subtitle</label>
                                <input id="articleSubtitleUpload" name="articleSubtitle" title="articleSubtitle"
                                    maxLength={30} spellCheck="true" onInput={updateCount()}
                                    aria-placeholder="Please enter your artiicle subtitle"></input>
                                <p><span id="current2">0</span> / 30 characters</p>

                                <label htmlFor="articleUpload">Enter your article body</label>
                                <textarea id="articleUpload" name="articleUpload" title="articleUpload" maxLength={2000}
                                    spellCheck="true" onInput={updateCount()}
                                    aria-placeholder="Please enter your artiicle information"></textarea>
                                <p><span id="current">0</span> / 2000 characters</p>
                                <label htmlFor="tags">Choose your article's topic:</label>

                                <select title="topic" name="topic" id="topic">
                                    <option value="Select">Select Topic</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Streaming">Streaming</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Slice of Life">Slice of Life</option>
                                    <option value="Music">Music</option>
                                    <option value="Manga">Manga</option>
                                    <option value="Sports">Sports</option>
                                </select>

                            </div>
                        </div>
                        <div className={classes.createArticleRightBox}>
                            <h2>Upload your article image</h2>
                            <div className={classes.imageBox}>
                                <label htmlFor="articleFilePath">
                                    <Image
                                        id="articleImg"
                                        className={classes.articleImg}
                                        src={imageUrl}
                                        alt="checkerboard"
                                        width={70}
                                        height={40}
                                    />
                                </label>
                            </div>
                            {/* <span className={classes.materialSymbolsOutlined}>
                                photo_camera_front
                            </span> */}


                            <input onChange={handleImageChange} hidden type="file" accept="image/jpeg, image/png, image/jpg" id="articleFilePath" />



                        </div>

                    </div>
                    <div className={classes.articleSubmitBtn}>
                        <button id="submitBtn" className={classes.submitBtn} type="submit">Submit</button>
                    </div>
                </div>
            </form >
        </div >
    )
}