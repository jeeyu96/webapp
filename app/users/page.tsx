import type { Metadata } from "next"
import getAllUsers from "@/app/api/getDatafromAPI"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Users',
}

// console.log('Hello')

export default async function UsersPage() {
    // will request this during the build -> this is a static website
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData

    console.log('Hello')

    // map over what we expect to receive
    const content = (
      <section>

    {users.map(user => (
        <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
        ))}
      </section>
    )

  return content
}

