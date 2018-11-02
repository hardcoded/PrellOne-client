let nextBoardId = 1

export const addBoard = (title) => ({
  type: 'ADD_BOARD',
  id: 'board' + nextBoardId++,
  title
})