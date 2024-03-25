export default async function userRegister(Name: string,Tel: string ,Email: string, Password: string ){
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
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
        throw new Error('Can\'t Register');
    }

    
    return await response.json();
}