'use client'

import { deleteArticle} from "@/app/api/blogs/controller/blog-api-controller"


export function DeleteButton({blogId} : {blogId:string}) {

  function handleDelete() {
    
        deleteArticle(blogId)
    
    }

    //window.confirm?

    return (
        <>

        <button onClick={handleDelete}>Delete?</button>
           
        </>
    )
}