const ROUTE_URL_PREFIX = '/api/auth/';


export async function login(loginRequest: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'login', loginRequest});
}

export async function register(registerRequest: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'register', registerRequest});
}

export async function verfication(verificationRequest: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: "verification", verificationRequest})
}

export async function verificationResend(verificationResendRequest: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: "verification_resend", verificationResendRequest})
}

export async function logout(): Promise<any> {
    return patchData(ROUTE_URL_PREFIX, {route: "logout"})
}

async function fetchData(url: string, body: any) {

    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    });

    return response.json();
}

async function patchData(url: string, body: any) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    });

    return response.json();
}