import { NextResponse } from "next/server";

export async function POST(request: Request) {
   try {
        const body = await request.json();
        const {url} = body;
        let requestBody = {}
        let contentType = 'application/json'

        if (url === 'login') {
            requestBody = getLoginBody(body)
        }else if (url === 'register') {
            requestBody = getRegisterBody(body);
            contentType = "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
        }
         console.log(requestBody)
        const backendResponse = await fetch(`http://localhost:8080/v1/auth/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': contentType
            },
            body: JSON.stringify(requestBody),
        });


        const data = await backendResponse.json();
        return NextResponse.json(data, {status: 200});
   } catch(error) {
        console.log(error)
        return NextResponse.json({error: error}, {status: 500});
   }
}

function getRegisterBody(requestBody) {
    const favoriteTopics = " "
    const {firstName, lastName, userName, password, email, avatar} = requestBody;
    return  {firstName, lastName, userName, password, email, avatar, favoriteTopics};
}

function getLoginBody(requestBody){
    const {username, password} = requestBody;
    return {username, password};
}