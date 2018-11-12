export const loginSuccess = (token, username) => ({
    type: 'LOGGED_IN',
    payload: {
        token: token,
        username: username
    }
})

export const login = (message) => ({
    type: 'LOGGING_IN',
    payload: message
})

export const loginFailed = (error) => ({
    type: 'LOGIN_FAILED',
    payload: error
})