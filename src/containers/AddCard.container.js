import { connect } from 'react-redux'
import AddCard from '../components/AddCard'
import { addCard } from '../actions/list.action'

const mapStateToProps = (state, ownProps) => ({
  listId: ownProps.listId
})

const mapDispatchToProps = dispatch => ({
  addCard: (id, title) => { 
    dispatch(addCard(id, title))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard)