import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'; 
import reducerCardPrello from './cardPrello.reducer'
import reducerListPrello from './listPrello.reducer'
import reducerBoard from './board.reducer'
import reducerModal from './modal.reducer'

export default combineReducers({
    form: formReducer,
    reducerCardPrello,
    reducerBoard,
    reducerListPrello,
    reducerModal,
})
