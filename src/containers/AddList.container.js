import React from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions/list.action'


const mapStateToProps = (state, ownProps) => {
  const card = state.reducerCardPrello[ownProps.cardId]
  return ({
    id: card.id,
    index: card.index,
    title: card.title,
    labelIds: card.labelIds,
    toggleCardModal: toggleCardModal
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddList)