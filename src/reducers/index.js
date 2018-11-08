import { combineReducers } from 'redux'
import reducerCardPrello from './cardPrello.reducer'
import reducerListPrello from './listPrello.reducer'
import reducerLabel from './label.reducer'
import reducerMember from './member.reducer'
import reducerBoard from './board.reducer'
import reducerModalCard from './modalCard.reducer'
import reducerTextEditor from './textEditor.reducer'
import reducerAddList from './addList.reducer'
import reducerAppNav from './appNav.reducer'
import reducerHome from './home.reducer'
import reducerAddBoard from './addBoard.reducer'
import reducerTeamsManager from './teamsManager.reducer'
import reducerTeam from './team.reducer'
import reducerAddTeam from './addTeam.reducer'
import reducerLogin from './login.reducer'
import reducerRegister from './register.reducer'
import reducerUpdatePassword from './updatePassword.reducer'

export default combineReducers({
    reducerCardPrello,
    reducerBoard,
    reducerListPrello,
    reducerLabel,
    reducerMember,
    reducerModalCard,
    reducerTextEditor,
    reducerAddList,
    reducerAppNav,
    home: reducerHome,
    reducerAddBoard,
    reducerTeamsManager,
    reducerTeam,
    reducerAddTeam,
    login: reducerLogin,
    register: reducerRegister,
    reducerUpdatePassword
})