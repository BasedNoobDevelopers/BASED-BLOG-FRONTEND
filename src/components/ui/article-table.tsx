'use client';

import classes from "./article-table.module.css"
import { DeleteButton } from "../buttons/delete-button"
import { fetchAllByUsername } from "@/app/api/blogs/controller/blog-api-controller";
import { Article } from "@/lib/articles";
import { formatDate } from "@/utils/format";
import { useState, useEffect } from "react";



export default function ArticleTable() {

    const [articleList, setArticleList] = useState<Article[]>([]);


    useEffect(() => {
        async function handleAllArticlesByUser() {
            try {
                const response = await fetchAllByUsername();
                setArticleList(response.content);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            }
        }

        handleAllArticlesByUser();
    }, []);

    const headers = ['Title', 'Topic', 'Date', 'Actions']
    return (
        <table className={classes.table}>
            <thead className={classes.header}>
                <tr>
                    {headers.map((label, index) => (
                        <th className={classes.headers} key={index}>
                            {label}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className={classes.tableBody}>
                {articleList.length > 0 ?
                    articleList?.map((article, index) => (
                        <tr key={article.blogID || article.blogTitle || index}>
                            <td className={classes.rowTitle}>{article.blogTitle}</td>
                            <td className={classes.rowTopic}>
                                {article.blogTopic.charAt(0).toUpperCase() + article.blogTopic.slice(1)}
                            </td>
                            <td className={classes.rowDate}>
                                {formatDate(article.createdDate)}
                            </td>
                            <td>
                                <button className={classes.tableButtons}>Edit</button>
                                <DeleteButton blogId = {article.blogID} />
                            </td>

                        </tr>
                    )) : ( 
                        <tr>
                            <td colSpan={4} className={classes.noArticles}>
                                No articles found.
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    )
}