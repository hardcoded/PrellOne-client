import demoData from '../components/demo-data'

const modal = (state = {}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL':
            const card = demoData.cards[action.cardId]
            return {
                ...card,
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