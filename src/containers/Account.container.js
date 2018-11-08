import { connect } from 'react-redux'
import Account from '../components/Account'

const mapStateToProps = (state, ownProps) => {
  return ({
   /* userName: state.reducerAccount[ownProps.memberId].userName,
    photo: state.reducerAccount[ownProps.memberId].photo*/
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)