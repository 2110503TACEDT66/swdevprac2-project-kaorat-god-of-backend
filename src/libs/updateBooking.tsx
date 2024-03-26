export default async function updateBookings(token:string,id:string,date:Date) {
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/appointments/${id}`,{
        method:'PUT',
        headers: {
            Authorization: `Bearer ${token}`, 
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            apptDate:date
        })
        
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch booking')
    }else{
        alert("Update Successfully")
    }

    return await response.json()
}