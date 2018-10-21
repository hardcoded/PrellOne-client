const list = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [
                    ...state.cards,
                    action.card
                ],
                lists : {
                    ...state.lists,
                    [action.id] : {
                        ...state.lists[action.id],
                        cardIds: [
                            ...state.lists[action.id].cardIds,
                            action.card.id
                        ]
                    }
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

export default list