const TeamsManager = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            return [
                ...state,[action.team.id]
            ] 
            default:
            return state
        case 'TEAMS_FETCHED':
            return action.teams

        case 'TEAM_ADDED': 
            return [
                ...state,
                action.team
            ]
    }
}

export default TeamsManager;