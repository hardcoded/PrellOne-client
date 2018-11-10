const board = (state = {}, action) => {
    switch (action.type) {
        case 'BOARDS_LOADED':
            return action.boards.reduce((map, board) => {
                map[board.id] = board;
                return map;
            }, {});

        case 'BOARDS_LOAD_FAILED':
            return state
        
        case 'BOARD_FETCHED':
            return { 
                ...state,
                [action.payload.id]: action.payload 
            }
            
        case 'LIST_ADDED':
            return {
                ...state,
                [action.list.board]: {
                    ...state[action.list.board],
                    lists: [
                        ...state[action.list.board].lists,
                        action.list
                    ]
                }   
            }

        case 'BOARD_ADDED' :
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