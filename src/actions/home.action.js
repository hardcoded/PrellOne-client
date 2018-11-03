let nextBoardId = 3

export const addBoard = (title,idTeam) => 
{   if(idTeam){
    return ({
        type: 'ADD_BOARD',
        idTeam,
        board: {
            id: 'board' + nextBoardId++,
            title: title,
            lists: [],
            teams:[idTeam]
        }
    })
    }else{
       return ({
            type: 'ADD_BOARD',
            board: {
                id: 'board' + nextBoardId++,
                title: title,
                lists: [],
                teams:[]
            }
        })  
    }
    
}

export const addTeam = (name) => ({
  type: 'ADD_TEAM',
  id: 'Team' + nextBoardId++,
  name
})
