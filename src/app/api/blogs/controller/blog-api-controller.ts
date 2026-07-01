const ROUTE_URL_PREFIX = '/api/blogs/';



export async function fetchLatest(): Promise<any> {

   const response = await fetch(ROUTE_URL_PREFIX, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({route: "latest"})
        });
        

       const result = await response.json();
       console.log(result)
        console.log("After respone")
        return result
}