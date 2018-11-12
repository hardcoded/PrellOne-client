import React from 'react'
import AppNav from '../containers/AppNav.container'
import Board from '../containers/Board.container'
import Home from '../containers/Home.container'
import Register from '../containers/Register.container'
import Login from '../containers/Login.container'
import { Switch, Route, Redirect } from 'react-router-dom'
import TeamsManager from '../containers/TeamsManager.container'
import { isAuthenticated } from '../services/auth.service'
import UpdatePassword from '../containers/UpdatePassword.container'
import Account from '../containers/Account.container.js'
import UpdateInfo from '../containers/UpdateInfo.container'
import LoginLdap from '../containers/LoginLdap.container';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} {...rest} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)

const App = ({ dispatch }) => (
    <div>
        <AppNav />
        <Switch>
            <PrivateRoute exact path='/' component={Home} dispatch={dispatch} />
            <PrivateRoute exact path='/:username/boards' component={Home} />
            <PrivateRoute path='/board/:boardId' component={Board} />
            <PrivateRoute path='/team' component={TeamsManager} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login/polytech' component={LoginLdap} />
            <PrivateRoute path='/:username/updatePwd' component={UpdatePassword}/>
            <PrivateRoute path='/:username/updateInfo' component={UpdateInfo}/>
            <PrivateRoute path='/:username/account' component={Account}/>
        </Switch>
    </div>
)


export default App;