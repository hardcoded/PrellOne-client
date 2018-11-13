export const updateInfoSuccess = (user) => ({
    type: 'UPDATE_INFO_SUCCESS',
    user
})

export const updateInfoError = (error) => ({
    type: 'UPDATE_INFO_ERROR',
    payload: error
})