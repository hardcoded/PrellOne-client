export const register = (message) => ({
    type: 'DEV_REGISTER',
    payload: message
})

export const registerSuccess = (clientID, clientSecret) => ({
    type: 'DEV_REGISTER_SUCCESS',
    payload: {
        clientID: clientID,
        clientSecret: clientSecret
    }
})

export const registerFailed = (error) => ({
    type: 'DEV_REGISTER_FAIL',
    payload: error
})

export const clearDeveloperInfo = (error) => ({
    type: 'DEV_CLEAR'
})