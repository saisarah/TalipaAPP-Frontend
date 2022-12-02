import Http from "../helpers/Http"

export const fetchCurrentUser = async () => {
    const { data } = await Http.get('/user')
    return data
}

export const sendLoginOtp = async (contact_number) => {
    return await Http.post('/login/send-otp', {contact_number})
}

export const verifyLoginOtp = async ({contact_number, code}) => {
    return await Http.post('/login/verify-otp', {
        contact_number,
        code,
        device_name: 'TalipaAPP FrontEnd'
    })
}