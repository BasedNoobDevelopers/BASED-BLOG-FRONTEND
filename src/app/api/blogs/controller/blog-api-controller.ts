const ROUTE_URL_PREFIX = '/api/blogs/';


export async function fetchLatest(): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'latest'});
}

export async function fetchAll(): Promise<any> {
   return fetchData(ROUTE_URL_PREFIX, {route: 'all'});
}

export async function fetchByID(ID: string): Promise<any> {
    return fetchData("http://localhost:3000/api/blogs/", {route: 'id', ID});
}

export async function postNewArticle(body: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'new', body})
}

async function fetchData(url: string, body: any) {

    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    });

    return response.json();
}