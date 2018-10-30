import { connect } from 'react-redux'
import ModalPrello from '../components/ModalPrello'
import { openModal, closeModal } from '../actions/modal.action'


const mapStateToProps = (state, ownProps) => {
  return ({
    modal: state.reducerModal.modal
  })
}

const mapDispatchToProps = dispatch => ({
    openModal: () => { 
      dispatch(openModal())},
   
    closeModal: () => {
        dispatch(closeModal())}
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPrello)