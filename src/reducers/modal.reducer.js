import demoData from '../components/demo-data'

const modal = (state = demoData.board, action) => {
    switch (action.type) {

    case 'OPEN_MODAL':
            return {
                ...state,
                modal: action.payload
            }
        case 'CLOSE_MODAL':
        return {
            ...state,
            modal: action.payload
        }
        default: return state;
    }
}

export default modal