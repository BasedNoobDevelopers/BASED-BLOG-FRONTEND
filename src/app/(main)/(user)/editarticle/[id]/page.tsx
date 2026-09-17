"use client"
import { useState, useEffect, ChangeEvent } from "react";
import classes from './editarticle.module.css'
import { editArticle, fetchByID } from "@/app/api/blogs/controller/blog-api-controller";
import { useParams } from 'next/navigation'

interface FormState {
    title: string;
    subtitle: string;
    body: string;
    topic?: string;
}



export default function EditArticlePostPage() {

    const [stopped, setStopped] = useState(false)
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [articleBody, setArticleBody] = useState('');

    const { id } = useParams<{ id: string }>();


    const [topic, setTopic] = useState(' ')
    const [blogCoverImage, setBlogCoverImage] = useState<string | ArrayBuffer | null>(null);


    const [imageUrl, setImageUrl] = useState<string>('/assets/checkerboard.svg')

    const [fileObjectUrl, setFileObjectUrl] = useState<string | null>(null);
    useEffect(() => {
        return () => {
            if (fileObjectUrl) {
                URL.revokeObjectURL(fileObjectUrl);
            }
        }
    }, [fileObjectUrl])


    async function handleArticle() {
        if (id) {
            const data = await fetchByID(id)
            setTitle(data.blogTitle)
            setSubtitle(data.blogSubTitle)
            setArticleBody(data.blogContent)
            setImageUrl(data.blogCoverImage.imageUrl)
            setStopped(true)
        }

    }
    if (!stopped) {
        handleArticle()

    }

    function handleTitleChange(event){
        setTitle(event.target.value)
    };

    function handleSubtitleChange(e){
        setSubtitle(e.target.value);
    }

    function handleBodyChange(e){
        setArticleBody(e.target.value);
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (fileObjectUrl) {
            URL.revokeObjectURL(fileObjectUrl);
        }

        const objectUrl = URL.createObjectURL(file);
        setFileObjectUrl(objectUrl);
        setImageUrl(objectUrl)

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setBlogCoverImage(reader.result);
    };




    async function handleSubmit(e: any) {
        e.preventDefault()
        if (topic == undefined || topic == "" || topic === "Select") {
            alert("Please select topic")
            return
        }

        const body = {
            blogTitle: title,
            blogSubTitle: subtitle,
            blogContent: articleBody,
            topic,
            blogCoverImage: blogCoverImage,
        }

        const response = await editArticle(id, body);


        if ((!response.blogID && !response.statusCode) || response.statusCode >= 400) {
            alert(response.message)
            return
        }

        alert("This Article Was Edited!")
        window.location.reload()
    }




    return (
        <div className={classes.createArticlePage}>
            <form className={classes.createArticleForm}
                onSubmit={handleSubmit}
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
                                    value={title}
                                    onChange={handleTitleChange}
                                    required
                                />
                                <p>
                                    <span id="current1">{title.length}</span>
                                    / 60 characters
                                </p>

                                <label htmlFor="articleSubtitle">Article subtitle</label>
                                <input
                                    id="articleSubtitle"
                                    name="subtitle"
                                    title="articleSubtitle"
                                    maxLength={60}
                                    spellCheck="true"
                                    value={subtitle}
                                    onChange={handleSubtitleChange}
                                    required
                                />

                                <p>
                                    <span id="current2">{subtitle.length}</span>
                                    / 60 characters
                                </p>

                                <label htmlFor="articleBody">Enter your article's body</label>
                                <textarea
                                    id="articleBody"
                                    name="body"
                                    title="articleBody"
                                    placeholder="Minimum character limit - 500"
                                    minLength={500}
                                    maxLength={2000}
                                    spellCheck="true"
                                    value={articleBody}
                                    onChange={handleBodyChange}
                                    required
                                />
                                <p>
                                    <span id="current">{articleBody.length}</span>
                                    / 2000 characters
                                </p>



                            </div>
                        </div>
                        <div className={classes.createArticleRightBox}>
                            <h2>Upload your article's image</h2>
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
                                <p></p>
                                <label htmlFor="articleFilePath">Max upload size - 1MB</label>


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


                            <p className={classes.createArticleUserInputSelectLabel} htmlFor="tags">Choose your article's topic:</p>
                            <select
                                className={classes.createArticleUserInputSelect}
                                title="topic"
                                name="topic"
                                id="topic"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                required
                            >
                                <option className={classes.createArticleUserOption} value="">Select Topic</option>
                                <option value="gaming">Gaming</option>
                                <option value="tv/movies">TV/Movies</option>
                                <option value="tech">Tech</option>
                                <option value="slice-of-life">Slice of Life</option>
                                <option value="music">Music</option>
                                <option value="anime/manga">Anime/Manga</option>
                                <option value="sports">Sports</option>
                                <option value="art">Art</option>
                                <option value="literature">Literature</option>
                                <option value="misc/other">Misc/Other</option>


                            </select>
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