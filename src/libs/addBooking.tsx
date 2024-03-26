export default async function addBooking(mid:string,reservedate:Date,token:string,uid:string){
    
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/massageshops/${mid}/appointments`, {
        method: 'POST',
        headers: {
            Authorization:`Bearer ${token}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            apptDate:reservedate,
            user:uid,
            massageshop:mid,
        })
    });
    
    if(!response.ok) {
        throw new Error('Cant booking');
    }else{
        alert("Create Successfully")
    }

    
    return await response.json();
}