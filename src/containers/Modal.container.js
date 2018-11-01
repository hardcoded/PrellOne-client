import { connect } from 'react-redux'
import ModalPrello from '../components/ModalPrello'
import { closeModal } from '../actions/modal.action'


const mapStateToProps = (state) => {
  const card = state.reducerCardPrello[state.reducerModal.activeCard] 
  if (card) {
    return ({
      cardId: card.id,
      modal: state.reducerModal.modal,
      title: card.title,
      description: card.description,
      labelIds: card.labelIds,
      memberIds: card.memberIds,
      comments: card.comments
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