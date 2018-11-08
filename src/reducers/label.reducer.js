const Label = (state = {}, action) => {
    switch (action.type) {
        case 'BOARD_FETCHED':
            return action.payload.labels.reduce((map, label) => {
                map[label.id] = label;
                return map;
            }, {});
        default:
            return state
    }
}

export default Label