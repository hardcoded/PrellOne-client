import React, {Component} from 'react'
import { connect } from 'react-redux'
import ModalCard from '../components/ModalCard'
import { closeModal, toggleEdit, closeEdit, openEditCardDesc, editCardDesc } from '../actions/modalCard.action'
import {cardUpdated} from '../actions/card.action'
import {updateCard, downloadDocument} from '../services/card.service'

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
    allLabels: state.reducerLabel,
    allMembers: state.reducerMember
  })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
      dispatch(closeModal())
    },
    toggleEdit: (field) => {
      dispatch(toggleEdit(field))
    },
    closeEdit: (field) => {
      dispatch(closeEdit(field))
    },
    updateCard: async (card) => {
      try {
        console.clear()
        console.clear("Update Card Called Haaaa")
        const data = await updateCard(card)
        dispatch(cardUpdated(data))
      }
      catch(error) {
        const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
        //dispatch(errorFetchingUser(message))
      }
    },
    download: async (fileName) => {
      try {
        const file = await downloadDocument(fileName)
        console.log("Download should be starting ...")
      }
      catch (error){
        const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
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

