//import demoData from '../components/demo-data'


const home = (state = { user: null, error: null }, action) => {
    switch (action.type) {
        case 'USER_FETCHED':
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
                            id: action.board.id,
                            title: action.board.title
                        }
                    ]   
                }
            }
        default:
            return state
    }
}

export default home