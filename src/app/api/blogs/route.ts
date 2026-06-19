import { NextResponse } from "next/server";
import { parse, stringify } from 'uuid';
import { cookies } from 'next/headers'

export async function POST(request: Request) {
   try {

        const body = await request.json();
        console.log("WAIT")
        const { url } = body;

        switch(url) {
            case 'login': return await loginPOSTRequest(body);
            case 'register': return await registerPOSTRequest(body)
            case 'latest': return await latest();
            case 'verification': return ""
            default: return NextResponse.json({ error: "Invalid URL route" }, { status: 400 });
        }
      

   } catch(error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message || error }, { status: 500 });
   }
}


async function loginPOSTRequest(body: any) {
    //const requestBody = getLoginBody(body);
    

            const backendResponse = await fetch(`http://localhost:8080/v1/blogs/public/all`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
               
            });
            const data = await backendResponse.json();
            return NextResponse.json(data, { status: 200 });
}

async function latest(body: any) {
    //const requestBody = getLoginBody(body);
    

            const backendResponse = await fetch(`http://localhost:8080/v1/blogs/public/latest`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
               
            });
            const data = await backendResponse.json();
            return NextResponse.json(data, { status: 200 });
}

async function registerPOSTRequest(body: any) {
     const {id} = body
     if (!id) return;
     console.log("HERERE")
     console.log(body)
     console.log(id)
     const inputString = id

// 1. Convert the string to a byte array
const uuidBytes = parse(id);

// 2. Convert the byte array back to a formatted UUID string
const validUuid = stringify(uuidBytes);
    const backendResponse = await fetch(`http://localhost:8080/v1/blogs/public/${validUuid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // CRITICAL: No 'Content-Type' header here. Fetch creates it with the proper boundary automatically.
    });
    console.log(backendResponse)

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}


//#region  Helper Methods (Start)

function getLoginBody(requestBody: any) {
    const { username, password } = requestBody;
    return { username, password };
}

// Helper to construct a real FormData object
function getRegisterFormData(requestBody: any): FormData {
    const formData = new FormData();
    const { firstName, lastName, userName, password, email, avatar } = requestBody;

    formData.append("firstName", firstName || "");
    formData.append("lastName", lastName || "");
    formData.append("userName", userName || "");
    formData.append("password", password || "");
    formData.append("email", email || "");
    formData.append("favoriteTopics", " ");


    // Handle the Base64 avatar conversion
    if (avatar && avatar.startsWith("data:")) {
        try {
            // Split the metadata from the actual base64 data
            const parts = avatar.split(",");
            const mimeType = parts[0].match(/:(.*?);/)[1]; // e.g., "image/jpeg"
            const base64Data = parts[1];

            // Convert Base64 string to a NodeJS Buffer
            const buffer = Buffer.from(base64Data, "base64");

            // Convert Buffer to a standard Blob that FormData understands
            const fileBlob = new Blob([buffer], { type: mimeType });
            let imgType = mimeType.split("/")[1];
            imgType = (imgType === "jpeg") ? "jpg" : imgType;

            // CRITICAL: Providing a filename (3rd argument) forces FormData 
            // to treat this property as a File instead of a plain string text field.
            formData.append("avatar", fileBlob, `avatar.${imgType}`);
        } catch (error) {
            console.error("Failed to parse avatar Base64 string:", error);
            // Optional fallback: formData.append("avatar", avatar);
        }
    }


    return formData;
}

//#endregion Helper Methods (End)