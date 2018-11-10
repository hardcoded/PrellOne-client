import { connect } from 'react-redux'
import AddComment from '../components/AddComment'
import { addComment } from '../actions/card.action'

const mapStateToProps = (state, ownProps) => {
  return ({
    userId: state.home.user.id,
    userName: state.home.user.username,
    photo: state.home.user.profilePicture
  })
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (content, userId) => { 
    dispatch(addComment(ownProps.cardId, content, userId))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment)