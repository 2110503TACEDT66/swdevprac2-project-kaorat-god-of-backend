export default async function getMassageshop(id: string) {
    const response = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/massageshops/${id}`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massageshop')
    }

    return await response.json()
}