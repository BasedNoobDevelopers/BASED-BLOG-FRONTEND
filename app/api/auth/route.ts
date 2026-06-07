import { NextResponse } from "next/server";

export async function POST(request: Request) {
   try {
        const body = await request.json();
        const { url } = body;
        
        // 1. Handle JSON-based Login route
        if (url === 'login') {
            const requestBody = getLoginBody(body);
            const backendResponse = await fetch(`http://localhost:8080/v1/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            });
            const data = await backendResponse.json();
            return NextResponse.json(data, { status: 200 });
        }

        // 2. Handle Multipart-based Register route
        if (url === 'register') {
            const formData = getRegisterFormData(body);
            
            const backendResponse = await fetch(`http://localhost:8080/v1/auth/register`, {
                method: 'POST',
                // CRITICAL: No 'Content-Type' header here. Fetch creates it with the proper boundary automatically.
                body: formData, 
            });

            const data = await backendResponse.json();
            return NextResponse.json(data, { status: 200 });
        }

        return NextResponse.json({ error: "Invalid URL route" }, { status: 400 });

   } catch(error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message || error }, { status: 500 });
   }
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


function getLoginBody(requestBody: any) {
    const { username, password } = requestBody;
    return { username, password };
}
