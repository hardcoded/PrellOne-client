import { connect } from 'react-redux'
import Comment from '../components/Comment'


const mapStateToProps = (state, ownProps) => {
  return ({
    id: ownProps.commentId,
    content: ownProps.content,
    userName: state.reducerMember[ownProps.writer].username,
    photo: state.reducerMember[ownProps.writer].profilePicture
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)