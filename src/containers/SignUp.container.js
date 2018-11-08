import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import { submitSignUp } from '../actions/signUp.action'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (userName, firstName, lastName, email, password) => { 
    dispatch(submitSignUp(userName, firstName, lastName, email, password))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)