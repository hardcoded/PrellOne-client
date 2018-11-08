
const Member = (state = {}, action) => {
    switch (action.type) {
        case 'BOARD_LOADED':
            console.log(action)
            return action.board.members.reduce((map, member) => {
                map[member.id] = member;
                return map;
            }, {});
        case 'ADD_MEMBER_TEAM':
            return {
                ...state,
                [action.member.id]:action.member
            }
        default:
            return state
    }
}

export default Member