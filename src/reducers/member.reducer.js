
const Member = (state = {}, action) => {
    switch (action.type) {
        case 'BOARD_FETCHED':
            return action.payload.members.reduce((map, member) => {
                map[member.id] = member;
                return map;
            }, {});
            
        case 'TEAMS_FETCHED':
            var allMembers = [];
            action.teams.map((team) => {
                allMembers = [...allMembers, ...team.members]
                return team
            });
            return allMembers.reduce((map, member) => {
                map[member.id] = member;
                return map;
            }, {});

        case 'ADD_MEMBER_TEAM':
            return {
                ...state,
                [action.member.id]:action.member
            }
        case 'MEMBER_ADDED_TEAM':
            return {
                ...state,
                [action.member.id]: action.member
            }

        case 'MEMBER_ADDED_BOARD':
            return {
                ...state,
                [action.member.id]: action.member
            }

        case 'MEMBER_ADDED_CARD':
            console.log('member reducer :', action.member)
            return {
                ...state,
                [action.member]: action.member
            }

        default:
            return state
    }
}

export default Member