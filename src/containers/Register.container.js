import { connect } from 'react-redux'
import Register from '../components/Register'
import { registerSuccess, registerError } from '../actions/register.action'
import { register } from '../services/register.service'

const mapStateToProps = (state, ownProps) => ({
    error: state.register.error
})

const mapDispatchToProps = dispatch => ({
    register: async (username, firstname, lastname, email, password) => {
        try {
            await register(username, firstname, lastname, email, password)
            dispatch(registerSuccess())
        }
        catch (error) {
            const message = error.status === 500 && !error.data ? "Oops, something went wrong..." : error.data.message
            dispatch(registerError(message))
            throw error
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)