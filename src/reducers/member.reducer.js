import demoData from '../components/demo-data'

const Member = (state = demoData.users, action) => {
    switch (action.type) {
        case 'ADD_MEMBER_TEAM':
            return {
                ...state,
                [action.member.id]:action.member
            }
        default:
            return state
    }
}

export default Member