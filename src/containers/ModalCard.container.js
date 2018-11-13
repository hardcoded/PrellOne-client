import React, {Component} from 'react'
import { connect } from 'react-redux'
import ModalCard from '../components/ModalCard'
import { closeModal, toggleEdit, openEditCardDesc, editCardDesc } from '../actions/modalCard.action'
import {cardUpdated} from '../actions/card.action'
import {updateCard} from '../services/card.service'

class ModalCardContainer extends Component {
  componentWillMount() {

  }

  render = () => {
    if (this.props.card){
      return <ModalCard {...this.props}></ModalCard>
    } 
    return null
  }
}

const mapStateToProps = (state) => {
  const card = state.reducerCardPrello[state.reducerModalCard.activeCard] 
  return ({
    card,
    ...state.reducerModalCard,
    descEditorState: state.reducerTextEditor.value,
    allLabels: state.reducerLabel
  })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
      dispatch(closeModal())
    },
    toggleEdit: (field) => {
      dispatch(toggleEdit(field))
    },
    updateCard: async (card) => {
      try {
        const data = await updateCard(card)
        dispatch(cardUpdated(data))
      }
      catch(error) {
        const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
        //dispatch(errorFetchingUser(message))
      }
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
)(ModalCardContainer)

