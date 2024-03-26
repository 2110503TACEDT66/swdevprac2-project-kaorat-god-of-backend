export default async function getBookings(token:string,id:string) {
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/appointents/${id}`,{
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