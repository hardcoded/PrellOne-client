import demoData from '../components/demo-data'

const home = (state = demoData.home, action) => {
    switch (action.type) {
        case 'ADD_BOARD' :
            return [
                ...state,
                action.board.id
            ]
        
        default:
            return state

    }
}

export default home