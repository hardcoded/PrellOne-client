const account = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_INFO_SUCCESS': 
            return action.user
        default:
            return state
    }
}

export default account