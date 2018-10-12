import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppNav from './AppNav'
import Home from './Home'
import Board from './Board'

class App extends Component {
    render(){
        return [
            <AppNav />,
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/board' component={Board}/>
                </Switch>
            </div>
        ]
    }
}

export default App;