import { connect } from 'react-redux'
import ModalCard from '../components/ModalCard'
//import {  } from '../actions'

const toggleCardModal = () => {}

const mapStateToProps = (state, ownProps) => {
  const card = state.reducerCardPrello[ownProps.cardId]
  return ({
    title: card.title,
    desc: card.desc,
    memberIds: card.membersIds,
    labelIds: card.labelIds,
    toggleCardModal: toggleCardModal
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCard)