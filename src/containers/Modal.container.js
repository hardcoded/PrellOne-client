import { connect } from 'react-redux'
import ModalPrello from '../components/ModalPrello'
import { closeModal } from '../actions/modal.action'


const mapStateToProps = (state) => {
  return ({
    modal: state.reducerModal.modal,
    title: state.reducerModal.title,
    description: state.reducerModal.description,
    labelIds: state.reducerModal.labelIds,
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