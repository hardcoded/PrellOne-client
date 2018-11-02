import demoData from '../components/demo-data'

const team = (state = demoData.teams, action) => {
    switch (action.type) {
        
        case 'ADD_BOARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    boards: [
                        ...state[action.id].boards,
                        action.boards.id
                    ]
                }   
            }
            case 'ADD_MEMBER':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    members: [
                        ...state[action.id].members,
                        action.members.id
                    ]
                }   
            }

        default:
            return state
    }
}

export default team