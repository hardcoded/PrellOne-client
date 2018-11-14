const team = (state = {}, action) => {
    switch (action.type) {
        case 'TEAMS_FETCHED':
            console.log(action)
            return action.teams.reduce((map, team) => {
                map[team.id] = team;
                return map;
            }, {});

        case 'TEAM_ADDED': 
            return {
                ...state,
                [action.team.id]: action.team
            }
            
        case 'BOARD_ADDED':
            
            return {
                ...state,
            }

            case 'ADD_MEMBER_TEAM':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    members: [
                        ...state[action.id].members,
                        action.member.id
                    ]
                }   
            }

            case 'ADD_TEAM':
            return{
                ...state,
                [action.team.id]:action.team
            }

        case 'SHOW_ADD_MEMBER':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addMember: true
                }
            }
        case 'HIDE_ADD_MEMBER':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addMember: false
                }
            }
        case 'MEMBER_ADDED_TEAM':
            if (!state[action.id].members.some(member => member.id === action.member.id)){
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        members: [
                            ...state[action.id].members,
                            action.member
                        ]
                    }
                }
            }
            else {
                return state
            }
            
        default:
            return state
    }
}

export default team