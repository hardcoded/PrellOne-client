import demoData from '../components/demo-data'

const board = (state = demoData.boards, action) => {
    switch (action.type) {

        case 'ADD_LIST':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    lists: [
                        ...state[action.id].lists,
                        action.list.id
                    ]
                }   
            }

        case 'ADD_BOARD' :
            return {
                ...state,
                [action.board.id] : action.board
            }
        
        case 'TOGGLE_ADD_LIST':
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    ...state,
                    toggleAddList: !state.toggleAddList
                }
            }
        default:
            return state
    }
}

export default board