import demoData from '../components/demo-data'

const cardPrello = (state = demoData.cards, action) => {
    switch (action.type) {
        case 'ADD_CARD':
        return {
            ...state,
            [action.card.id]: action.card
        }

        case 'ADD_MEMBER':
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    ...state,
                    members: [...state.members, action.member]
                };
            }

        case 'ADD_COMMENT':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    comments: [
                        ...state[action.id].comments,
                        action.comment
                    ]
                }

            }

        case 'TOGGLE_DONE':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    done: !state[action.id].done
                }
            }

        case 'UPDATE_DESC':
            if (state.id !== action.id) {
                return state
            } else {
                return {
                    ...state,
                    desc: action.desc
                };
            }

        case 'REMOVE_MEMBER':
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    ...state,
                    members: [...state.members.slice(0, action.index), ...state.members.slice(action.index + 1)]
                }
            }

        case 'ADD_LABEL':
            if (state.id !== action.id) {
                return state
            } else {
                return {
                    ...state,
                    labels: [...state.members.slice(0, action.index), action.label]
                }
            }
        case 'REMOVE_LABEL':
            if (state.id !== action.id) {
                return state
            } else {
                return {
                    ...state,
                    labels: [...state.labels.slice(0, action.index), ...state.labels.slice(action.index + 1)]
                }
            }
        case 'UPDATE_CARD_ATTRIBUTE':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.attributeName]: action.value
                }
            }
        default:
            return state
    }
}

export default cardPrello