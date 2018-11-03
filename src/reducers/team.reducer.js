import demoData from '../components/demo-data'

const team = (state = demoData.teams, action) => {
    switch (action.type) {
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