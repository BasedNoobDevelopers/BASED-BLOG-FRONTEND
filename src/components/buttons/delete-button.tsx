'use client'

import { deleteArticle} from "@/app/api/blogs/controller/blog-api-controller"


export function DeleteButton(blogId:any) {

  function handleDelete() {
    
        console.log("INSIDE DELETE")
        const {id} = blogId
        console.log(id)
        deleteArticle(id)
    
    }

    //window.confirm?

    return (
        <>

        <button onClick={handleDelete}>Delete?</button>
           
        </>
    )
}