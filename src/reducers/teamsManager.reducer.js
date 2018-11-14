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

        case 'BOARD_ADDED': 
            if (action.idTeam){
                return state.map(team => {if (team.id == action.idTeam){
                    return {
                        ...team,
                        boards: [
                            ...team.boards,
                            action.board
                        ]
                    }
                }
                else {
                    return team
                }})
            } 
            else { 
                return state 
            } 

    }
}

export default TeamsManager;