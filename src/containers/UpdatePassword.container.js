import { connect } from 'react-redux'
import UpdatePassword from '../components/UpdatePassword'
import { updatePwdSuccess, updatePwdError } from '../actions/updatePassword.action'
import { updatePassword } from '../services/user.service';

const mapStateToProps = (state, ownProps) => ({
    user: state.home.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updatePassword: async (user, oldPwd, newPWd) => {
        try {
            await updatePassword(user, oldPwd, newPWd)
            dispatch(updatePwdSuccess())
        }
        catch (error) {
            const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
            dispatch(updatePwdError(message))
            throw error
        }
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePassword)