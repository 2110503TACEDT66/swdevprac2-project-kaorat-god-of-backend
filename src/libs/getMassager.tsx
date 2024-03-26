export default async function getMassager(id: string) {
   
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massagers/${id}`)
    
    if (!response.ok) { 
        throw new Error('Failed to fetch massager')
    }

    return await response.json()
}