

export default async function userRegister(Name: string,Tel: string ,Email: string, Password: string ){
    
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: Name,
            tel: Tel,
            email: Email,
            role: "user",
            password: Password,
        })
    });
    
    if(!response.ok) {
        console.log(response)
        throw new Error('Can\'t Register');
    }

    
    return await response.json();
}