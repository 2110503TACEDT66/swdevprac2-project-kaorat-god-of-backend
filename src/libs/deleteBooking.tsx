export default async function deleteBooking(token:string,id:string) {
    
    await new Promise((reslove) => setTimeout(reslove, 1000))
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/appointments/${id}`,{
        method:'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    if (!response.ok) {
        throw new Error('Failed to Delete booking')
    }

    return await response.json()
}