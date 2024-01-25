export default async function getDatafromAPI() {

    const res = await fetch('https://api.github.com/repos/vercel/next.js')

    // received a good response?
    if (!res.ok) throw new Error ('failed to fetch data')

    return res.json()
}
