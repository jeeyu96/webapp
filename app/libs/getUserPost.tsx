export default async function getUserPosts(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    // received a good response?
    if (!res.ok) throw new Error ('failed to fetch data')


    return res.json()
    
    console.log(res)
}
