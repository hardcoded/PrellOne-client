import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppNav from './AppNav'
import Home from './Home'
import Board from '../containers/Board.container'

class App extends Component {
    render(){
        return [
            <AppNav />,
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/board' component={Board}/>
                </Switch>
        ]
    }
}

export default App;