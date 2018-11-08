const Label = (state = {}, action) => {
    switch (action.type) {
        case 'BOARD_LOADED':
            console.log(action)
            return action.board.labels.reduce((map, label) => {
                map[label.id] = label;
                return map;
            }, {});
        default:
            return state
    }
}

export default Label