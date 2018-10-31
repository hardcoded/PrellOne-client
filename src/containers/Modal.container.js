import { connect } from 'react-redux'
import ModalPrello from '../components/ModalPrello'
import { closeModal } from '../actions/modal.action'


const mapStateToProps = (state) => {
  console.clear()
  console.log(state)
  return ({
    modal: state.reducerModal.modal,
    title: state.reducerModal.title,
    description: state.reducerModal.description,
    memberIds: state.reducerModal.memberIds
  })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(closeModal())}
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPrello)