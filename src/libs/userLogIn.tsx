export default async function userLogIn(userEmail: string, userPassword: string) {
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    })

    if (!response.ok) {
        alert("fail to LogIn Please try again")
        throw new Error('Failed to log-in')
    }

    return await response.json()
}