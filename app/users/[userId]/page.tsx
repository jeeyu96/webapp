type Params = {
    params: {
        userId: string
    }
}


// for individual users
export default function UserPage({ params: { userId }}: Params) {
    return (
        <div>
            page
        </div>
    )
} 