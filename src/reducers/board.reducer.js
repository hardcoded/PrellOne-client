import demoData from '../components/demo-data'

const board = (state = demoData.boards['board1'], action) => {
    switch (action.type) {

        case 'ADD_LIST':
            return {
                ...state,
                lists: [
                    ...state.lists,
                    action.list.id
                ]
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