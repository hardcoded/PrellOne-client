let nextTeamId = 3

export const addTeam = (name) => ({
  type: 'ADD_TEAM',
  team:{
    id: 'Team' + nextTeamId++,
    name,
    boards:[],
    members:[]
  }
})