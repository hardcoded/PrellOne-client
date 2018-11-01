import { connect } from 'react-redux'
import ModalPrello from '../components/ModalPrello'
import { closeModal } from '../actions/modal.action'


const mapStateToProps = (state) => {
  const card = state.reducerCardPrello[state.reducerModal.activeCard] 
  if (card) {
    return ({
      ...card,
      modal: state.reducerModal.modal,

    })
  }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(closeModal())}
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPrello)