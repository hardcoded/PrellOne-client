export const submitRegister = (userName, firstName, lastName, email, password) => ({
    type: 'SUBMIT_REGISTER',
    userName,
    firstName,
    lastName,
    email,
    password
})

export const registerSuccess = () => ({
    type: 'REGISTER_SUCCESS'
})

export const registerError = (error) => ({
    type: 'REGISTER_ERROR',
    payload: error
})