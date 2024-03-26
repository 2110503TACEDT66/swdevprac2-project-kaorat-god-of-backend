export default async function getMassagers() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massagers`)
    
    if (!response.ok) {
        throw new Error('Failed to fetch massagers')
    }

    return await response.json()
}