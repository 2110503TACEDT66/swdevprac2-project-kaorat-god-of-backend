export default async function getBookings(token:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/appointments`,{
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