import demoData from '../components/demo-data'

const modal = (state = {}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL':
            return {
                activeCard: action.cardId,
                modal: true
            }
        case 'CLOSE_MODAL':
        return {
            activeCard: undefined,
            modal: false
        }
    default: return state;
    }
}

export default modal