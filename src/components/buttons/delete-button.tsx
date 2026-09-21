'use client'

import { useState } from "react"
import { createPortal } from "react-dom"
import { deleteArticle } from "@/app/api/blogs/controller/blog-api-controller"
import classes from './delete-button.module.css'


export function DeleteButton({ blogId }: { blogId: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function openModal() {
        setIsOpen(true)
    }

    function closemodal() {
        setIsOpen(false)
    }

    function handleDelete() {

        deleteArticle(blogId)
        setIsOpen(false)
        window.location.reload();
    }

    //window.confirm?

    return (
        <>

            <button onClick={openModal}>Delete?</button>

            {isOpen && createPortal(
                <div className={classes.modal}>
                    <h2 id="confirm-title">Are you sure you want to delete this article?</h2>
                    <p id="confirm-message">This action cannot be undone.</p>

                    <menu>
                        <button onClick={closemodal} id="confirm-cancel">Cancel</button>
                        <button onClick={handleDelete} id="confirm-delete">Confirm</button>
                    </menu>
                    
                </div>,

                document.body
            )}
        </>
    )
}