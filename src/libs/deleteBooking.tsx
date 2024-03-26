export default async function deleteBooking(token:string,id:string) {
    
    await new Promise((reslove) => setTimeout(reslove, 1000))
    
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/appointments/${id}`,{
        method:'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    if (!response.ok) {
        throw new Error('Failed to Delete booking')
    }else{
        alert("Delete Successfully")
    }

    return await response.json()
}