import { connect } from 'react-redux'
import { closeModalCreateBoard } from '../actions/addBoard.action'
import AddBoard from '../components/AddBoard'


const mapStateToProps = (state) =>({
    modal: state.reducerAddBoard.modal,
})

const mapDispatchToProps = dispatch => ({
    closeModalCreateBoard: () => {
        dispatch(closeModalCreateBoard())}
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBoard)