
export default async function userRegister(name: string, tel: string, email: string, password: string) {
    const requestBody = {
      name: name,
      tel: tel,
      email: email,
      role: "user", // Hardcoded role as "user"
      password: password,
    };
  
    const response = await fetch(`https://presentation-day-1-kaorat-god-of-backend.vercel.app/api/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
  
    if (!response.ok) {
      let errorMessage = 'Failed to register user';
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (error) {
        console.error('Error parsing error response:', error);
      }
      throw new Error(errorMessage);
    }
  
    return await response.json();
  }
  