import demoData from '../components/demo-data'

const TeamsManager = (state = demoData.teamsManager, action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            return [
                ...state,[action.team.id]
            ] 
            default:
            return state

    }
}

export default TeamsManager;