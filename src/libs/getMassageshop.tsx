export default async function getMassageshop(id: string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massageshops/${id}`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massageshop')
    }

    return await response.json()
}