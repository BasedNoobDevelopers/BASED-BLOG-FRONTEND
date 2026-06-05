import { NextResponse } from "next/server";

export async function POST(request: Request) {
   try {
        const body = await request.json();
        const {username, password} = body;
        console.log(body)
        const backendResponse = await fetch(`http://localhost:8080/v1/auth/${body.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password}),
        });



        const data = await backendResponse.json();
        return NextResponse.json(data, {status: 200});
   } catch(error) {
        return NextResponse.json({error: error}, {status: 500});
   }
}