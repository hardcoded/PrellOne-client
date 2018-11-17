const Label = (state = {}, action) => {
    switch (action.type) {
        case 'BOARD_FETCHED':
            return action.payload.labels.reduce((map, label) => {
                map[label.id] = label;
                return map;
            }, {});

        case 'TOGGLE_EDIT_TITLE_LABEL':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    editTitle: !state[action.id].editTitle 
                }
            }
        case 'TITLE_LABEL_UPDATED':
            return {
                ...state,
                [action.label.id]: {
                    ...state[action.label.id],
                    title: action.label.title
                } 
            }

        case 'TITLE_LABEL_UPDATED_SUCCESS':
            return {
                ...state,
                [action.label.id]: {
                    ...state[action.label.id],
                    title: action.label.title
                } 
            }
        default:
            return state
    }
}

export default Label