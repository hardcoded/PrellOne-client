/**
 * Function to handle home action to modify store
 * @param {*} state 
 * @param {*} action 
 */
const home = (state = { user: null, error: null }, action) => {
    switch (action.type) {
        case 'USER_FETCHED':
            return { 
                user: action.payload 
            }
        case 'SET_USER_PROFILE':
            return { 
                user: action.payload 
            }
        case 'BOARDS_LOAD_FAILED':
            return {
                user: null,
                error: action.payload
            }
        case 'BOARD_ADDED' :
            return {
                ...state,
                user : {
                    ...state.user,
                    boards: [
                        ...state.user.boards,
                            {
                                id:action.board.id,
                                title:action.board.title
                            }
                    ]   
                }
            }
        case 'UPDATE_INFO_SUCCESS' :
            return {
                ...state,   
                user: action.user
            }
        default:
            return state
    }
}

export default home