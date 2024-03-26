export default async function getMassager(id: string) {
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/massagers/${id}`)
    
    if (!response.ok) { 
        throw new Error('Failed to fetch massager')
    }

    return await response.json()
}