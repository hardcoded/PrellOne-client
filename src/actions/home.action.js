let nextBoardId = 1

export const addBoard = (title) => ({
    type: 'ADD_BOARD',
    board: {
        id: 'board' + nextBoardId++,
        title: title,
        lists: [],
    }
    
export const addTeam = (name) => ({
  type: 'ADD_TEAM',
  id: 'Team' + nextBoardId++,
  name
})
