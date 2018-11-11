let userId = 8
let nextBoardId = 3

export const teamsFetched = (teams) => ({
    type: 'TEAMS_FETCHED',
    teams,
})

export const teamAdded = (team) => ({
    type: 'TEAM_ADDED',
    team
})

export const addMemberTeam = (id, username) => ({
    type: 'ADD_MEMBER_TEAM',
    id, 
    member: {
        id: 'user' + userId++,
        username:username,
        photo: 'https://mediasv6.truffaut.com/Articles/jpg/0019000/19324_001_350.jpg'
    }
})

export const addBoard = (title,idTeam) => ({
    type: 'ADD_BOARD',
    idTeam, 
    board: {
        id: 'board' + nextBoardId++,
        title: title,
        lists: [],
        teams:[idTeam]
    }
})

export const hideAddMember = id => ({
    type: 'HIDE_ADD_MEMBER',
    id
})

export const showAddMember = id => ({
    type: 'SHOW_ADD_MEMBER',
    id
})