import { submitSignUp } from '../actions/signUp.action';

const signUp = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_SIGN_UP' :
            return {
                ...state,
                [action.list.id]: action.list
            }
        default :
            return state
    }
}

export default signUp