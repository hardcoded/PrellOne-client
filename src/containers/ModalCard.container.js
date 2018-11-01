import { connect } from 'react-redux'
import ModalCard from '../components/ModalCard'
import { closeModal } from '../actions/modalCard.action'


const mapStateToProps = (state) => {
  const card = state.reducerCardPrello[state.reducerModalCard.activeCard] 
  if (card) {
    return ({
      ...card,
      isOpen: state.reducerModalCard.isOpen,
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