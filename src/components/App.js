import React from 'react'
import AppNav from '../containers/AppNav.container'
import Board from '../containers/Board.container'
import Home from '../components/Home'
import { Switch, Route } from 'react-router-dom'

const App = () => (
    <div>
      <AppNav />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/board' component={Board}/>
      </Switch>
    </div>
  )
  

export default App;