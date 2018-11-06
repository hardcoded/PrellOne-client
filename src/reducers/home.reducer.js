//import demoData from '../components/demo-data'


const home = (state = [], action) => {
    switch (action.type) {
        case 'BOARDS_LOADED':
            return action.boards
        case 'BOARDS_LOAD_FAILED':
            return state
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