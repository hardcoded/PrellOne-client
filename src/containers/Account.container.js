import { connect } from 'react-redux'
import Account from '../components/Account'

const mapStateToProps = (state, ownProps) => ({
  firstname: state.home.user.firstName,
  lastname: state.home.user.lastName,
  username: state.home.user.username
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)