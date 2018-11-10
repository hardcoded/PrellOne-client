import { connect } from 'react-redux'
import ModalCard from '../components/ModalCard'
import { closeModal, toggleEdit, openEditCardDesc, editCardDesc } from '../actions/modalCard.action'
import { toggleDone, updateAttribute } from '../actions/card.action'


const mapStateToProps = (state) => {
  const card = state.reducerCardPrello[state.reducerModalCard.activeCard] 
  return ({
    ...card,
    ...state.reducerModalCard,
    descEditorState: state.reducerTextEditor.value,
    allLabels: state.reducerLabel
  })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
      dispatch(closeModal())
    },
    toggleDone: (id) => {
      dispatch(toggleDone(id))
    },
    toggleEdit: (id, field) => {
      dispatch(toggleEdit(id, field))
    },
    updateAttribute: (id, attributeName, value) => {
      dispatch(updateAttribute(id, attributeName, value))
    },
    openEditCardDesc: (description) => {
      dispatch(openEditCardDesc(description))
    }, 
    editCardDesc: (value) => {
      dispatch(editCardDesc(value))
    }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCard)

