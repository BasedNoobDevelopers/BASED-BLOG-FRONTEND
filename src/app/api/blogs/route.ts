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