import demoData from '../components/demo-data'

const label = (state = demoData.labels, action) => {
    switch (action.type) {
        case 'ADD_LABEL':
            return {
                id: action.id,
                title: action.title,
            }
            
        default:
            return state
    }
}

export default label