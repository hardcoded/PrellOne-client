let nextBoardId = 3

export const addBoard = (title) => ({
    type: 'ADD_BOARD',
    board: {
        id: 'board' + nextBoardId++,
        title: title,
        lists: [],
    }
})
