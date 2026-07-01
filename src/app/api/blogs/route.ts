import { NextResponse } from "next/server";
import { parse, stringify } from 'uuid';
import { cookies } from 'next/headers'

let HOST_URL = process.env.HOST_URL || "http://localhost"
let HOST_PORT = process.env.HOST_PORT || "8080"

const ENVIRONMENT = process.env.ENVIRONMENT || "local"
const API_VERSION = process.env.API_VERSION || "v1"
const LATEST_LIMIT = process.env.LATEST_LIMIT || 12

if (ENVIRONMENT == undefined || ENVIRONMENT === "local") {
    HOST_URL = HOST_URL + ":" + HOST_PORT;
}


export async function POST(request: Request) {
    try {
        console.log("IN GET FUNCTION")
        console.log(HOST_URL)
        console.log(request)
        const body = await request.json();
        console.log("THIS IS THE BODY")
        console.log(body)
        console.log("I SHOULD SEE THIS")
        const {route} = body;

        switch(route.trim().toLowerCase()) {
            case 'latest': return await getLatest();
        }
         console.log("HERE-2")
    } catch(error: any) {
        console.log(error)
        return NextResponse.json({error: error.message || error }, {status: 500})
    }
}

async function getLatest() {
    console.log(HOST_URL)
    const backendResponse = await fetch(`${HOST_URL}/${API_VERSION}/blogs/public/latest?limit=${LATEST_LIMIT}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        
    });
    const data = await backendResponse.json();
    console.log("DATA")
    console.log(data)
    console.log("------------------------------------")
    return NextResponse.json(data, { status: 200 });
}