let nextBoardId = 3

export const addTeam = (name) => ({
  type: 'ADD_TEAM',
  id: 'Team' + nextBoardId++,
  name
})