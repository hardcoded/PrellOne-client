const addTeam = (state = {}, action) => {
    switch (action.type) {
        case 'HIDE_ADD_TEAM':
            return {
                ...state,
                hidden: true
            }

        case 'SHOW_ADD_TEAM':
            return {
                ...state,
                hidden: false
            }

        default:
            return state
        }
    }

export default addTeam
