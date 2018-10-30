import { combineReducers } from 'redux'
import reducerCardPrello from './cardPrello.reducer'
import reducerListPrello from './listPrello.reducer'
import reducerBoard from './board.reducer'
import modalBoard from './modal.reducer'

export default combineReducers({
    reducerCardPrello,
    reducerBoard,
    reducerListPrello,
    modalBoard,
})