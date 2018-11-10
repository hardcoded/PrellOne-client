import store from '../index'

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

export function setConnectedUser(user) {
    store.dispatch({
        type: 'SET_USER_PROFILE',
        payload: user
    })
}