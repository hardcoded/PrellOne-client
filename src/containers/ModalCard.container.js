import { connect } from 'react-redux'
import ModalCard from '../components/ModalCard'
import { closeModal } from '../actions/modalCard.action'
import { toggleDone } from '../actions/card.action'


const mapStateToProps = (state) => {
  const card = state.reducerCardPrello[state.reducerModalCard.activeCard] 
    return ({
      ...card,
      isOpen: state.reducerModalCard.isOpen,
    })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
      dispatch(closeModal())
    },
    toggleDone: (id) => {
      dispatch(toggleDone(id))
    }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCard)

