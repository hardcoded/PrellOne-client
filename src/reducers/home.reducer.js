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
        case 'ADD_BOARD' :
            return [
                ...state,
                action.board.id
            ]
        default:
            return state
    }
}

export default home