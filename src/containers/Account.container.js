import { connect } from 'react-redux'
import Account from '../components/Account'

const mapStateToProps = (state, ownProps) => ({
  user: state.home.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)