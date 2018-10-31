import { connect } from 'react-redux'
import Comment from '../components/Comment'


const mapStateToProps = (state, ownProps) => {
  return ({
    id: ownProps.commentId,
    content: ownProps.content,
    userName: state.reducerMember[ownProps.userId].userName,
    photo: state.reducerMember[ownProps.userId].photo
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)