import { connect } from 'react-redux'
import { closeModal } from '../actions/addBoard.action'
import AddBoard from '../components/AddBoard'


const mapStateToProps = (state) =>({
    modal: state.reducerAddBoard.modal,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(closeModal())}
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBoard)