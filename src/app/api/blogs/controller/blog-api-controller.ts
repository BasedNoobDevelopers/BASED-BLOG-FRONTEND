const ROUTE_URL_PREFIX = '/api/blogs/';



export async function fetchLatest(): Promise<any> {

   const response = await fetch(ROUTE_URL_PREFIX, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({route: "latest"})
        });
        

       const result = await response.json();
        return result
}

export async function fetchAll(): Promise<any> {

   const response = await fetch(ROUTE_URL_PREFIX, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({route: "all"})
        });
        

       const result = await response.json();
        return result
}

export async function fetchByID(ID: string): Promise<any> {

   const response = await fetch("http://localhost:3000/api/blogs/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({route: "id", ID})
        });
        

       const result = await response.json();
        return result
}