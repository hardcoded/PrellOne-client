import { connect } from 'react-redux'
import AddCard from '../components/AddCard'
import { addCard } from '../actions/list.action'
import { hideAddCard } from '../actions/list.action'
import { showAddCard } from '../actions/list.action'

const mapStateToProps = (state, ownProps) => ({
  listId: ownProps.listId,
  hidden: state.reducerListPrello[ownProps.listId].addCard,
})

const mapDispatchToProps = dispatch => ({
  addCard: (id, title) => { 
    dispatch(addCard(id, title))
  },
  hide: (id) => {
    dispatch(hideAddCard(id))
  },
  show: (id) => {
    dispatch(showAddCard(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard)