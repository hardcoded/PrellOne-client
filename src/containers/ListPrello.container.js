import { connect } from 'react-redux'
import ListPrello from '../components/ListPrello'


const mapStateToProps = (state, ownProps) => {
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