import { Dayjs } from "dayjs";

export default async function addBooking(mid:string,reservedate:Dayjs,token:string,uid:string){
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massageshops/${mid}/appointments`, {
        method: 'POST',
        headers: {
            Authorization:`Bearer ${token}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            apptDate:reservedate.toDate,
            user:uid,
            massageshop:mid,
        })
    });
    
    if(!response.ok) {
        throw new Error('Cant booking');
    }

    
    return await response.json();
}