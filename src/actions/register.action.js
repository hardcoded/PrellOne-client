export const submitRegister = (username, firstname, lastname, email, password) => ({
    type: 'SUBMIT_REGISTER',
    username,
    firstname,
    lastname,
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