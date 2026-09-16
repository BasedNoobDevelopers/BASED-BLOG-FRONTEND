'use client'
import classes from "./edit-button.module.css"
import { useRouter } from 'next/navigation'
export function EditButton({ blogId }: { blogId: string }) {
    const router = useRouter();
    
    async function HandleEdit() {
    
        router.push(`/editarticle/${blogId}`);

    }

    return (
        <>
            <button className={classes.editButton} onClick={HandleEdit}>Edit</button>
        </>

    )
}