const ROUTE_URL_PREFIX = '/api/auth/';


export async function login(loginRequest: any): Promise<any> {
    const {username, password} = loginRequest
    return fetchData(ROUTE_URL_PREFIX, {route: 'login', username, password});
}

export async function fetchAll(): Promise<any> {
   return fetchData(ROUTE_URL_PREFIX, {route: 'all'});
}

export async function fetchByID(ID: string): Promise<any> {
    return fetchData("http://localhost:3000/api/blogs/", {route: 'id', ID});
}

async function fetchData(url: string, body: any) {

    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    });

    return response.json();
}