export default async function getMassagers() {
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/massagers`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massagers')
    }

    return await response.json()
}