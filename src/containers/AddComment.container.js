import { connect } from 'react-redux'
import AddComment from '../components/AddComment'
import {cardUpdated} from '../actions/card.action'
import {updateCard} from '../services/card.service'

const mapStateToProps = (state, ownProps) => {
  return ({
    userId: state.home.user.id,
    userName: state.home.user.username,
    photo: state.home.user.profilePicture
  })
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: async (content, userId) => {
    try {
      const data = await updateCard({...ownProps.card, comments: [...ownProps.card.comments, {writer: userId, content: content}]})
      dispatch(cardUpdated(data))
    }
    catch(error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      //dispatch(errorFetchingUser(message))
    }
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment)