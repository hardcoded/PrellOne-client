import React from 'react'
import AppNav from '../containers/AppNav.container'
import Board from '../containers/Board.container'
import Home from '../containers/Home.container'
import SignUp from '../containers/SignUp.container'
import SignIn from '../containers/SignIn.container'
import { Switch, Route } from 'react-router-dom'
import TeamsManager from '../containers/TeamsManager.container';

const App = () => (
    <div>
      <AppNav />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/board/:boardId' component={Board}/>
      <Route path='/team' component={TeamsManager}/>
      <Route path='/signUp' component={SignUp}/>
      <Route path='/signIn' component={SignIn}/>
      </Switch>
    </div>
  )
  

export default App;