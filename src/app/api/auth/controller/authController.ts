const ROUTE_URL_PREFIX = '/api/auth/';


export async function login(loginRequest: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'login', loginRequest});
}

export async function register(registerRequest: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'register', registerRequest});
}

async function fetchData(url: string, body: any) {

    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    });

    return response.json();
}