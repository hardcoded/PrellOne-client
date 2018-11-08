import { connect } from 'react-redux'
import AppNav from '../components/AppNav'
import { open, close } from '../actions/appNav.action'

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.reducerAppNav.isOpen,
  token: state.login.token
})

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