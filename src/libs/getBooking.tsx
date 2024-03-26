export default async function getBookings(token:string,id:string) {
    
    await new Promise((reslove) => setTimeout(reslove, 1000))
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/appointents/${id}`,{
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch booking')
    }

    return await response.json()
}