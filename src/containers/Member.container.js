import { connect } from 'react-redux'
import Member from '../components/Member'

const mapStateToProps = (state, ownProps) => {
  return ({
    id: state.reducerMember[ownProps.memberId].id,
    userName: state.reducerMember[ownProps.memberId].userName,
    photo: state.reducerMember[ownProps.memberId].profilePicture
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)