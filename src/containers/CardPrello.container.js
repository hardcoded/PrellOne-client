import { connect } from 'react-redux'
import CardPrello from '../components/CardPrello'
//import {  } from '../actions'

const toggleCardModal = () => {}

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
)(CardPrello)