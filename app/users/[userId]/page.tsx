// fetch in parallel
import getUser from "@/app/libs/getUser"
import getUserPosts from "@/app/libs/getUserPost"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"


type Params = {
    params: {
        userId: string
    }
}


// for individual users
export default async function UserPage({ params: { userId }}: Params) {
    // define userData & request; start request right away
    const userData: Promise<User> = getUser(userId)

    // get user's Post data as well; start request right away
    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    // use Promise: all
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    // get user 
    const user = await userData

    // resolve this in parallel

    return (
        <>
            <h2> {user.name} </h2>
            <br />
            <Suspense fallback ={<h2> Loading ... </h2>}>
                <UserPosts promise = {userPostsData} />
            </Suspense>
        </>
    )
} 