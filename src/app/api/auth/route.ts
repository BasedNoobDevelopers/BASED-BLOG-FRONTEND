import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

let HOST_URL = process.env.HOST_URL|| "http://localhost"
let HOST_PORT = process.env.HOST_PORT || "8080"

const ENVIRONMENT = process.env.ENVIRONMENT || "local"
const API_VERSION = process.env.API_VERSION || "v1"


if (ENVIRONMENT == undefined || ENVIRONMENT === "local") {
    HOST_URL = HOST_URL + ":" + HOST_PORT;
}


export async function POST(request: Request) {
   try {
        const body = await request.json();
        const { route } = body;

        switch(route.trim().toLowerCase()) {
            case 'login': return await loginPOSTRequest(body);
            case 'register': return await registerPOSTRequest(body)
            case 'verification': return ""
            default: return NextResponse.json({ error: "Invalid URL route" }, { status: 400 });
        }
      

   } catch(error: any) {
        return NextResponse.json({ error: error.message || error }, { status: 500 });
   }
}


async function loginPOSTRequest(body: any) {
    const requestBody = getLoginBody(body);
    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
    });
    
    const data = await backendResponse.json();
    if (data.jwtToken) {
        const cookieStore = await cookies();
        cookieStore.set('auth_token', data.jwtToken, {
            httpOnly: true,
            secure: ENVIRONMENT === 'prod' || ENVIRONMENT === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: data.expirationTime
        })
    }
    return NextResponse.json(data, { status: 200 });
}

async function registerPOSTRequest(body: any) {
    const {registerRequest} = body
     const formData = getRegisterFormData(registerRequest);
    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/auth/register`, {
        method: 'POST',
        // CRITICAL: No 'Content-Type' header here. Fetch creates it with the proper boundary automatically.
        body: formData, 
    });

    

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}


//#region  Helper Methods (Start)

function getLoginBody(requestBody: any) {
    const { loginRequest } = requestBody;
    const { username, password } = loginRequest
    return {username, password}
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