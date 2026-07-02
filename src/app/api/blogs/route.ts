import { NextResponse } from "next/server";
import { parse, stringify } from 'uuid';
import { cookies } from 'next/headers'


let HOST_URL = process.env.HOST_URL|| "http://localhost"
let HOST_PORT = process.env.HOST_PORT || "8080"

const ENVIRONMENT = process.env.ENVIRONMENT || "local"
const API_VERSION = process.env.API_VERSION || "v1"
const LATEST_LIMIT = process.env.LATEST_LIMIT || 12
const SIZE_LIMIT = process.env.SIZE_LIMIT || 9

if (ENVIRONMENT == undefined || ENVIRONMENT === "local") {
    HOST_URL = HOST_URL + ":" + HOST_PORT;
}


export async function POST(request: Request) {
    try {

        const body = await request.json();
        const {route} = body;
        
        switch(route.trim().toLowerCase()) {
            case 'latest': return await getLatest();
            case 'all': return await getAll();
            case 'id': return await getByID(body);
            case 'new': return await postNewArticle(body)
        }

    } catch(error: any) {
        return NextResponse.json({error: error.message || error }, {status: 500})
    }
}

async function getLatest() {

    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/blogs/public/latest?limit=${LATEST_LIMIT}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}

async function getAll() {
    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/blogs/public/all?page=0&size=${SIZE_LIMIT}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}

async function getByID(body: any) {
    const {ID} = body;

    const uuidBytes = parse(ID);

    const validUuid = stringify(uuidBytes);
    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/blogs/public/${validUuid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}

async function postNewArticle(requestBody: any) {
    const {body} = requestBody;
    const blogFormData = getBlogFormData(body)
    const { token } = body

    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/blogs/new`, {
        method: 'POST',
        headers: { "Authorization": `Bearer ${token}` },
        body: blogFormData
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}

//#endregion Helper Methods (Start)

// Helper to construct a real FormData object
function getBlogFormData(requestBody: any): FormData {
    const formData = new FormData();
    const { blogTitle, blogSubTitle, blogContent, blogCoverImage, topic} = requestBody;

    formData.append("blogTitle", blogTitle|| "");
    formData.append("blogSubTitle", blogSubTitle || "");
    formData.append("blogContent", blogContent || "");
    formData.append("topic", topic || "");

    // Handle the Base64 avatar conversion
    if (blogCoverImage && blogCoverImage.startsWith("data:")) {
        try {
            // Split the metadata from the actual base64 data
            const parts = blogCoverImage.split(",");
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
            formData.append("blogCoverImage", fileBlob, `blogCoverImage.${imgType}`);
        } catch (error) {
            console.error("Failed to parse avatar Base64 string:", error);
            // Optional fallback: formData.append("avatar", avatar);
        }
    }


    return formData;
}

//#endregion Helper Methods (End)