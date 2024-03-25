export default async function getMassageshops() {
    
    await new Promise((reslove) => setTimeout(reslove, 1000))
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massageshops`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massageshops')
    }

    return await response.json()
}