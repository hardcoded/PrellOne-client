import demoData from '../components/demo-data'

const listPrello = (state = demoData.lists, action) => {
    switch (action.type) {
        case 'ADD_LIST' :
            return {
                ...state,
                [action.list.id]: action.list
            }
        
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
        case 'SHOW_ADD_CARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addCard: true
                }
            }
        case 'HIDE_ADD_CARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addCard: false
                }
            }
        default:
            return state
    }
}

export default listPrello