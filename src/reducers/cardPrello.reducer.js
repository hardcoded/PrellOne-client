import demoData from '../components/demo-data'

const cardPrello = (state = demoData.cards, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                id: action.id,
                title: action.title,
                desc: "",
                members: [],
                labels: [],
                toogle: false
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
        case 'TOGGLE_CARD_MODAL':
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    ...state,
                    toggle: !state.toggle
                }
            }
        default:
            return state
    }
}

export default cardPrello