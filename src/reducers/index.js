import { combineReducers } from 'redux'
import reducerCardPrello from './cardPrello.reducer'
import reducerListPrello from './listPrello.reducer'
import reducerBoard from './board.reducer'
import reducerModal from './modal.reducer'
import reducerAddList from './addList.reducer'

export default combineReducers({
    reducerCardPrello,
    reducerBoard,
    reducerListPrello,
    reducerModal,
    reducerAddList,
})