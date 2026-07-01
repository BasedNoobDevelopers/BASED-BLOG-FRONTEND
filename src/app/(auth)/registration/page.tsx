"use client"
import classes from './registration.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { register } from '@/app/api/auth/controller/authController'




export default function RegistrationPage() {

    const router = useRouter();
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [userName, setUserName] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [confirmPassword, setConfirmPassword] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [avatar, setAvatarImage] = useState<string | ArrayBuffer | null>(null);

    const [imageUrl, setImageUrl] = useState("/assets/user-avatar-var.jpg");

  async function handleSubmit(e:any) {
        e.preventDefault();


        const body = {firstName, lastName, userName, password, email, avatar} 
    

        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })


         const result = await response.json();
        console.log(result)

    }

    const handleImageInput = async (e:any) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        if(!file) return;
        const imageType = ['jpg', 'jpeg', 'png', 'gif'];
        const ifImageType = imageType.some(imgType => file.type.includes(imgType));
        if (!ifImageType){
            alert("Please Upload Img Types: JPG, JPEG, PNG");
            setAvatarImage(' ');
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setImageUrl(objectUrl);
        reader.readAsDataURL(file);
        reader.onload = () => setAvatarImage(reader.result);
    }


    return (
        <>

            <form className={classes.registrationForm} onSubmit={handleSubmit}>

                <div className={classes.registration}>
                    <h3 className={classes.h3}>Join the community!</h3>

                    <div className={classes.registrationRow}>
                        <div className={classes.userInput}>
                            <div className={classes.inputContainer}>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" title="first-name" aria-placeholder="Please enter your first name" onChange={(e) => setFirstName(e.target.value)} />
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" title="last-name" aria-placeholder="Please enter your last name" onChange={(e) => setLastName(e.target.value)}/>


                                <label htmlFor="username"> Username</label>
                                <input type="text" title="user-name" aria-placeholder="Please enter a username" onChange={(e) => setUserName(e.target.value)} />
                                <label htmlFor="email">Email</label>
                                <input type="text" title="email" aria-placeholder="Please enter an email address" onChange={(e) => setEmail(e.target.value)}/>


                                <label htmlFor="password">Password</label>
                                <input type="password" title="enter-password" aria-placeholder="Please enter a password" onChange={(e) => setPassword(e.target.value)}/>
                                <label htmlFor="password-reenter">Re-enter Password</label>
                                <input type="password" title="reenter-password" aria-placeholder="Please re-enter your password" onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className={classes.rightBox}>
                            <h2>Upload Avatar</h2>
                            <div className={classes.imageBox}>
                                <label htmlFor="file-path">
                                    <Image
                                        src={imageUrl}
                                        id="registration-img"
                                        className={classes.registrationImg}
                                        height={210}
                                        width={240}
                                        alt="User Avatar"
                                    />
                                </label>
                            </div>
                            <p>(optional)</p>
                            <input hidden title="avatar button" type="file" onChange={handleImageInput} accept="image/jpeg, image/png, image/jpg, image/gif" id="file-path" />
                        </div>
                        {/* <!-- <span className="material-symbols-outlined">
                                    photo_camera_front
                                </span>
                        optional --> */}



                    </div>

                    <div className={classes.registrationLogin}>
                        <button
                            id="signup-btn"
                            className="submit-btn"
                            type="submit">
                            Sign Up
                        </button>

                        <p>Already have an account?</p>
                        <Link href="/login">
                            <p>Click here to login</p>
                        </Link>

                    </div>

                </div>

            </form >

        </>

    )
}