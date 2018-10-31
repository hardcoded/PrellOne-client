let nextBoardId = 1

export const addCard = (title) => ({
  type: 'ADD_BOARD',
  id: 'board' + nextBoardId++,
  title
})