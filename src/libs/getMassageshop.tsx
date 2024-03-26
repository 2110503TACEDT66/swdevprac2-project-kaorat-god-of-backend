export default async function getMassageshop(id: string) {
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/massageshops/${id}`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massageshop')
    }

    return await response.json()
}