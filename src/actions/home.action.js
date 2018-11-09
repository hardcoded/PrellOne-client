let nextBoardId = 3

export const userFetched = (user) => {
    return ({
        type: 'USER_FETCHED',
        payload: user
    }) 
}

export const errorFetchingUser = (message) => {
    return ({
        type: 'ERROR_FETCH_USER',
        payload: message
    }) 
}

