import { onDragEnd } from '../services/dnd.service'


const listPrello = (state = {}, action) => {
    switch (action.type) {
        case 'BOARD_FETCHED':
            return action.payload.lists.reduce((map, list) => {
                map[list.id] = list;
                return map;
            }, {});

        case 'LISTS_LOAD_FAILED':
            return state
            
        case 'LIST_ADDED' :
            return {
                ...state,
                [action.list.id]: action.list
            }

        case 'LIST_ADDED_SUCCESS':
            if(state["idTemp"]){
                return {
                    ...state,
                    [action.list.id]: action.list,
                    ["idTemp"]: {}
                }
            }
            else {
                return {
                    ...state,
                    [action.list.id]: action.list
                }
            }
        case 'CARD_ADDED':
            return {
                ...state,
                [action.card.list]: {
                    ...state[action.card.list],
                    cards: [
                        ...state[action.card.list].cards,
                        action.card
                    ]
                }
            }

        case 'CARD_ADDED_SUCCESS':
            return {
                ...state,
                [action.card.list]: {
                    ...state[action.card.list],
                    cards: [
                        ...state[action.card.list].cards.filter(card => card.id != "idTemp"),
                        action.card
                    ]
                }
            }

        case 'TOGGLE_EDIT_TITLE':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    editTitle: !state[action.id].editTitle 
                }
            }
        case 'LIST_UPDATED':
            return {
                ...state,
                [action.list.id]: {
                    ...state[action.list.id],
                    title: action.list.title
                } 
            }
        case 'LIST_UPDATED_SUCCESS':
            return {
                ...state,
                [action.list.id]: {
                    ...state[action.list.id],
                    title: action.list.title
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
        case 'DND_CARD_END':
            return onDragEnd(state, action)
        default:
            return state
    }
}

export default listPrello