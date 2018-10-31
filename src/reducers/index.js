import { combineReducers } from 'redux'
import reducerCardPrello from './cardPrello.reducer'
import reducerListPrello from './listPrello.reducer'
import reducerLabel from './label.reducer'
import reducerBoard from './board.reducer'
import reducerModal from './modal.reducer'
import reducerAddList from './addList.reducer'
import reducerAppNav from './appNav.reducer'
import reducerHome from './home.reducer'

export default combineReducers({
    reducerCardPrello,
    reducerBoard,
    reducerListPrello,
    reducerLabel,
    reducerModal,
    reducerAddList,
    reducerAppNav,
    reducerHome,
})