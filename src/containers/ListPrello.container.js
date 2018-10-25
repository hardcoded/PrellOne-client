import { connect } from 'react-redux'
import ListPrello from '../components/ListPrello'
import {toggleAddCard  } from '../actions/list.action'
import { stat } from 'fs';


const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  console.log(state.reducerListPrello[ownProps.listId].title)
  return ({
    id: state.reducerListPrello[ownProps.listId].id,
    title: state.reducerListPrello[ownProps.listId].title,
    cardIds: state.reducerListPrello[ownProps.listId].cardIds
  })
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrello)