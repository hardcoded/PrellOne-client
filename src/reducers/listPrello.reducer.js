import demoData from '../components/demo-data'

const listPrello = (state = demoData.lists, action) => {
    switch (action.type) {
        // TODO add card to cards list with CardPrello Reducer 
        case 'ADD_CARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    cardIds: [
                        ...state[action.id].cardIds,
                        action.card.id
                    ]
                }
            }
        case 'TOGGLE_ADD_CARD':
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    ...state,
                    toggleAddCard: !state.toggleAddCard
                }
            }
        default:
            return state
    }
}

export default listPrello