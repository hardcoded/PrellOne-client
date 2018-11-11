const team = (state = {}, action) => {
    switch (action.type) {
        case 'TEAMS_FETCHED':
            return action.teams.reduce((map, team) => {
                map[team.id] = team;
                return map;
            }, {});

        case 'TEAM_ADDED': 
            return {
                ...state,
                [action.team.id]: action.team
            }
            
        case 'ADD_BOARD':
        if (action.idTeam){
            return {
                ...state,
                [action.idTeam]: {
                    ...state[action.idTeam],
                    boards: [
                        ...state[action.idTeam].boards,
                        action.board.id
                    ]
                }  
            }
        }
        else {
            return state
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
        default:
            return state
    }
}

export default team