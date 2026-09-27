'use client'

import { useState } from "react"
import { createPortal } from "react-dom"
import { deleteArticle } from "@/app/api/blogs/controller/blog-api-controller"
import classes from './delete-button.module.css'


export function DeleteButton({ blogId, blogTitle }: { blogId: string, blogTitle:string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleDelete() {

        deleteArticle(blogId);
        closeModal();
        window.location.reload();
    }
    
    //window.confirm?

    return (
        <>

            <button onClick={openModal}>Delete</button>

            {isOpen && createPortal(
                <div className={classes.modal}>
                    <h2 id="confirm-title">Are you sure you want to delete {blogTitle}?</h2>
                    <p id="confirm-message">This action cannot be undone.</p>

                    <menu>
                        <button onClick={handleDelete} id="confirm-delete">Confirm</button>
                        <button onClick={closeModal} id="confirm-cancel">Cancel</button>
                    </menu>
                    
                </div>,

                document.body
            )}
        </>
    )
}