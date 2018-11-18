import store from '../index'

/**
 * 
 * @param {User} user user to fetch the data
 * @return {action} USER_FETCHED action and the paylod with the user
 */
export const userFetched = (user) => {
    return ({
        type: 'USER_FETCHED',
        payload: user
    })
}

/**
 * @param {String} message message error 
 * @return {action} ERROR_FETCH_USER action and the paylod with the message
 */
export const errorFetchingUser = (message) => {
    return ({
        type: 'ERROR_FETCH_USER',
        payload: message
    })
}

/**
 * @param {User} user the connected user
 * @return {action} SET_USER_PROFILE action and the payload with the user
 */
export function setConnectedUser(user) {
    store.dispatch({
        type: 'SET_USER_PROFILE',
        payload: user
    })
}