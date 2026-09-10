'use client'

import { deleteArticle} from "@/app/api/blogs/controller/blog-api-controller"


export function DeleteButton() {

  function handleDelete() {
    
        console.log("INSIDE DELETE")
        deleteArticle('229efb25-82ae-4e09-b0b8-deb02642e252')
    
    }

    //window.confirm?

    return (
        <>

        <button onClick={handleDelete}>Delete?</button>
           
        </>
    )
}