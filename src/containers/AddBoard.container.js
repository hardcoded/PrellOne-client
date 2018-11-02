import { connect } from 'react-redux'
import { closeModalCreateBoard } from '../actions/addBoard.action'
import AddBoard from '../components/AddBoard'
import { addBoard } from '../actions/home.action'


const mapStateToProps = (state) =>({
    modal: state.reducerAddBoard.modal,
})

const mapDispatchToProps = dispatch => ({
    closeModalCreateBoard: () => {
        dispatch(closeModalCreateBoard())},

    addBoard: (title) => { 
        dispatch(addBoard(title))
        dispatch(closeModalCreateBoard())}
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBoard)