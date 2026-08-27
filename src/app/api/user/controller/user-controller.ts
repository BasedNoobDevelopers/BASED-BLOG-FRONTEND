const ROUTE_URL_PREFIX = '/api/user/';

export async function fetchMe(): Promise<any> {
    return fetchData('http://localhost:3000/api/user/', {route:'me'})
}

export async function fetchMyFeed(): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'feed'});
}

export async function updateMyInterest(interests: string []): Promise<any> {
    return fetchData(ROUTE_URL_PREFIX, {route: 'interest', interests});
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