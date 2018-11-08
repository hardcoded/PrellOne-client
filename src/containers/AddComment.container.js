import { connect } from 'react-redux'
import AddComment from '../components/AddComment'
import { addComment } from '../actions/card.action'

const mapStateToProps = (state, ownProps) => {
  return ({
    userName: state.reducerMember[ownProps.writer].username,
    photo: state.reducerMember[ownProps.writer].profilePicture
  })
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (content) => { 
    dispatch(addComment(ownProps.cardId, content, ownProps.writer))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment)