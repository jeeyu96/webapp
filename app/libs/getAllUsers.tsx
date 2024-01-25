export default async function getDatafromAPI() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    // received a good response?
    if (!res.ok) throw new Error ('failed to fetch data')

    return res.json()
    
    console.log(res)
}




