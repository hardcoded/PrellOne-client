import { connect } from 'react-redux'
import ListPrello from '../components/ListPrello'
//import {  } from '../actions'

const toggleAddCard = () => {}

const mapStateToProps = (state, ownProps) => {
  return ({
    id:             state.reducerListPrello[ownProps.listId].id,
    title:          state.reducerListPrello[ownProps.listId].title,
    cardIds:        state.reducerListPrello[ownProps.listId].cardIds,
    toggleAddCard:  toggleAddCard
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrello)