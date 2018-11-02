import React from 'react'
import AppNav from '../containers/AppNav.container'
import Board from '../containers/Board.container'
import Home from '../containers/Home.container'
import { Switch, Route } from 'react-router-dom'
import TeamsManager from '../containers/TeamsManager.container';

const App = () => (
    <div>
      <AppNav />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/board/:boardId' component={Board}/>
      <Route path='/team' component={TeamsManager}/>
      </Switch>
    </div>
  )
  

export default App;