import { connect } from 'react-redux'
import AddComment from '../components/AddComment'
import { addComment } from '../actions/card.action'

const mapStateToProps = (state, ownProps) => ({
  userName: state.reducerMember[ownProps.userId].userName,
  photo: state.reducerMember[ownProps.userId].photo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (content) => { 
    dispatch(addComment(ownProps.cardId, content, ownProps.userId))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment)