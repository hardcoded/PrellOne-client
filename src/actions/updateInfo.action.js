export const updateInfoSuccess = () => ({
    type: 'UPDATE_INFO_SUCCESS'
})

export const updateInfoError = (error) => ({
    type: 'UPDATE_INFO_ERROR',
    payload: error
})