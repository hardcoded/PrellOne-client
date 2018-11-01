import { connect } from 'react-redux'
import ModalCard from '../components/ModalCard'
import { closeModal } from '../actions/modalCard.action'


const mapStateToProps = (state) => {
  const card = state.reducerCardPrello[state.reducerModalCard.activeCard] 
  if (card) {
    return ({
      cardId: card.id,
      modal: state.reducerModalCard.modalCard,
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
)(ModalCard)