import Http from "../helpers/Http"

export const fetchCurrentUser = async () => {
    const { data } = await Http.get('/user')
    return data
}

export const sendLoginOtp = async (contact_number) => {
    const { data } = await Http.post('/login/send-otp', {contact_number})
    return data
}

export const sendRegisterOtp = async (contact_number) => {
    const { data } = await Http.post('/register/send-otp', {contact_number})
    return data
}

export const verifyLoginOtp = async ({contact_number, code}) => {
    const { data } = await Http.post('/login/verify-otp', {
        contact_number,
        code,
        device_name: 'TalipaAPP FrontEnd'
    })
    return data
}


export const validateData = async (data) => {
    await Http.post('/register/validator', data)
}

export const farmerRegister = async (_data) => {
    const { data } = await Http.post('/register/farmer', _data)
    return data
}