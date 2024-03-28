import '@testing-library/jest-dom'
import userLogIn from '@/libs/userLogIn'
import getUserProfile from '@/libs/getUserProfile'

describe('Remote User Log-In', () => {
  var logInPromise:Promise<Object>
  var logInJsonResult:Object
  var token:string
  var profilePromise:Promise<Object>
  var profileJsonResult:Object

  beforeAll(async () => {
    const email = "kaorat@gmail.com"
    const password = "12345678"
    logInPromise = userLogIn(email, password)
    logInJsonResult = await logInPromise
    // console.log(logInJsonResult)
    token = logInJsonResult.token
    
    profilePromise = getUserProfile(token)
    profileJsonResult = await profilePromise
    // console.log(profileJsonResult);
  }, 10000)

  it('userLogIn must return correct results', () => {
    expect(profileJsonResult.data._id).toMatch(/6602595cf1ca70e05cb0abdc/i)
    expect(profileJsonResult.data.email).toMatch(/kaorat@gmail.com/i) 
  })

  it('getUserProfile must return correct results', () => {
    var profileData = profileJsonResult.data
    expect(profileData.email).toMatch(/kaorat@gmail.com/i)
    expect(profileData.role).toMatch(/admin/i)
  })
})