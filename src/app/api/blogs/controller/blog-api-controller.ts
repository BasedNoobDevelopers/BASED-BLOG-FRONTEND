const ROUTE_URL_PREFIX = '/api/blogs/';


export async function fetchLatest(): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'latest'});
}

export async function fetchAll(): Promise<any> {
   return fetchData(ROUTE_URL_PREFIX, {route: 'all'});
}

export async function fetchAllByUsername():Promise <any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'allbyuser'})
}

export async function fetchByID(ID: string): Promise<any> {
    return fetchData("http://localhost:3000/api/blogs/", {route: 'id', ID});
}

export async function postNewArticle(body: any): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'new', body})
}

export async function editArticle(body:any): Promise<any>{
    return fetchData(ROUTE_URL_PREFIX, {route: 'edit', body});
}

export async function deleteArticle(ID:string): Promise<any>{
    return fetchData(ROUTE_URL_PREFIX, {route: 'delete', ID})
}

async function fetchData(url: string, body: any) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(body)
        });

        return response.json();
    } catch(error) {
        return error;
    }
    

    
}