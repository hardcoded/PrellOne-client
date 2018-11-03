import { connect } from 'react-redux'
import { closeModalCreateBoard } from '../actions/addBoard.action'
import AddBoard from '../components/AddBoard'
import { addBoard } from '../actions/home.action'


const mapStateToProps = (state) =>{
    const team = state.reducerTeam[state.reducerAddBoard.activeTeam] 
   return (
   {    ...team,
        modal: state.reducerAddBoard.modal
   })
    
}

const mapDispatchToProps = dispatch => ({
    closeModalCreateBoard: () => {
        dispatch(closeModalCreateBoard())},

    addBoard: (title,id) => { 
        dispatch(addBoard(title,id))
        dispatch(closeModalCreateBoard())}
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBoard)