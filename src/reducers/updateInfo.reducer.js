/**
 * Function to handle updateInfo action to modify store
 * @param {*} state 
 * @param {*} action 
 */
const updateInfo = (state = { error: null }, action) => {
    switch (action.type) {
        case 'UPDATE_INFO_SUCCESS' :
            return {
                ...state
            }
        case 'UPDATE_INFO_ERROR' :
            return {
                ...state,
                error: action.payload
            }
        default :
            return state
    }
}

export default updateInfo