export default async function getMassageshops() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massageshops`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massageshops')
    }

    return await response.json()
}