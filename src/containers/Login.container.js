import { connect } from 'react-redux'
import Login from '../components/Login'
import { login, loginSuccess, loginFailed } from '../actions/login.action'
import { login as authLogin } from '../services/auth.service';

const mapStateToProps = (state, ownProps) => ({
    error: state.login.error,
    waiting: state.login.waiting
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: async(credential, password) => {
        dispatch(login("Logging you in, please wait..."))
        try {
            const data = await authLogin(credential, password)
            dispatch(loginSuccess(data.token))
            return data.user
        }
        catch(error) {
            const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
            dispatch(loginFailed(message))
            throw error
        }
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)