import { NextResponse } from "next/server";
import { cookies } from 'next/headers'


let HOST_URL = process.env.HOST_URL || "http://localhost"
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
        const { route } = body;

        switch (route.trim().toLowerCase()) {
            case 'me': return await getMe();
            case 'feed': return await getMyFeed();
            case 'interest': return await updateMyInterest(body)
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message || error }, { status: 500 })
    }
}

export async function getMe() {

    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/user/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
     
     

    return NextResponse.json({success: backendResponse.ok})
  
}

async function getMyFeed() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/user/feed?page=0&size=${SIZE_LIMIT}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}

async function updateMyInterest(body: any) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    const { interests } = body
    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/user/interest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(interests)
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
}


//#endregion Helper Methods (End)