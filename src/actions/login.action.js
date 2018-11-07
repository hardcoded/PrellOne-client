export const loginSuccess = (token) => ({
    type: 'LOGGED_IN',
    payload: token
})

export const login = (message) => ({
    type: 'LOGGING_IN',
    payload: message
})

export const loginFailed = (error) => ({
    type: 'LOGIN_FAILED',
    payload: error
})