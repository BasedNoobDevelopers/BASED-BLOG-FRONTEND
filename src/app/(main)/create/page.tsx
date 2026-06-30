"use client"
import React, { useState, useEffect, ChangeEvent } from "react";
import classes from './create.module.css'

interface FormState {
    title: string;
    subtitle: string;
    body: string;
    topic?: string;
}

export default function CreateBlogPostPage() {

    // const [count, setcount] = useState(0);

    const [characterValue, setCharacterValue] = useState<FormState>({
        title: "",
        subtitle: "",
        body: "",
    });
    const [imageUrl, setImageUrl] = useState<string>('/assets/checkerboard.svg')
    // prevent memory leaks if new image selected
    const [fileObjectUrl, setFileObjectUrl] = useState<string | null>(null);
    useEffect(() => {
        return () => {
            if (fileObjectUrl) {
                URL.revokeObjectURL(fileObjectUrl);
            }
        }
    }, [fileObjectUrl])

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (fileObjectUrl) {
            URL.revokeObjectURL(fileObjectUrl);
        }
        const objectUrl = URL.createObjectURL(file);
        setFileObjectUrl(objectUrl);
        setImageUrl(objectUrl)
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCharacterValue((prev) => ({ ...prev, [name]: value }));
    }




    return (
        <div className={classes.createArticlePage}>
            <form className={classes.createArticleForm}
                // onSubmit={handeSubmit}
                action="/createArticle"
                method="post"
            >
                <div className={classes.createArticle}>
                    <h3>Add your article to the site</h3>

                    <div className={classes.createArticleRow}>
                        <div className={classes.createArticleUserInput}>

                            <div className={classes.createArticleInputContainer}>
                                <label htmlFor="articleTitle">Article title</label>
                                <input
                                    id="articleTitle"
                                    name="title"
                                    title="articleTitle"
                                    maxLength={60}
                                    spellCheck="true"
                                    value={characterValue.title}
                                    onChange={handleTextChange}
                                    required
                                />
                                <p>
                                    <span id="current1">{characterValue.title.length}</span>
                                    / 60 characters
                                </p>

                                <label htmlFor="articleSubtitle">Article subtitle</label>
                                <input
                                    id="articleSubtitle"
                                    name="subtitle"
                                    title="articleSubtitle"
                                    minLength={25}
                                    maxLength={60}
                                    spellCheck="true"
                                    value={characterValue.subtitle}
                                    onChange={handleTextChange}
                                    required
                                />

                                <p>
                                    <span id="current2">{characterValue.subtitle.length}</span>
                                    / 60 characters
                                </p>

                                <label htmlFor="articleBody">Enter your article body</label>
                                <textarea
                                    id="articleBody"
                                    name="body"
                                    title="articleBody"
                                    minLength={1000}
                                    maxLength={3000}
                                    spellCheck="true"
                                    value={characterValue.body}
                                    onChange={handleTextChange}
                                    required
                                />
                                <p>
                                    <span id="current">{characterValue.body.length}</span>
                                    / 2000 characters
                                </p>

                                <label htmlFor="tags">Choose your article's topic:</label>
                                <select 
                                    className={classes.createArticleUserInputSelect} 
                                    title="topic" 
                                    name="topic" 
                                    id="topic"
                                >
                                    <option className={classes.createArticleUserOption} value="Select">Select Topic</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Film/TV">Film/TV</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Slice of Life">Slice of Life</option>
                                    <option value="Music">Music</option>
                                    <option value="Anime/Manga">Manga</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Art">Art</option>
                                    <option value="Literature">Literature</option>
                                    <option value="Misc/Other">Misc/Other</option>


                                </select>

                            </div>
                        </div>
                        <div className={classes.createArticleRightBox}>
                            <h2>Upload your article image</h2>
                            <div className={classes.imageBox}>
                                <label htmlFor="articleFilePath">
                                    <img
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


                            <input onChange={handleImageChange}
                                hidden
                                type="file"
                                accept="image/jpeg, image/png, image/jpg"
                                id="articleFilePath"
                            />

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