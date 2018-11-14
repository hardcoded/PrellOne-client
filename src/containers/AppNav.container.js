import { connect } from 'react-redux'
import AppNav from '../components/AppNav'
import { open, close } from '../actions/appNav.action'

const mapStateToProps = (state, ownProps) => {
  const username = state.home.user ? state.home.user.username : state.login.username
  return ({
    isOpen: state.reducerAppNav.isOpen,
    token: state.login.token,
    username: username
  })
}

const mapDispatchToProps = dispatch => ({
    open: () => {
      dispatch(open())},

    close: () => {
      dispatch(close())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNav)