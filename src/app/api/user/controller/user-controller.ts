const ROUTE_URL_PREFIX = '/api/user/';


export async function fetchMyFeed(): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'feed'});
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