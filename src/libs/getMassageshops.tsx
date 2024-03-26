export default async function getMassageshops() {
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/massageshops`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massageshops')
    }

    return await response.json()
}