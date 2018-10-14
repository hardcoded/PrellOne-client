import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boards: [{title: "MY board"}]
        }
    }

    // componentWillMount() {
    //     fetch(`/api/board/`)
    //         .then(res => res.json())
    //         .then(data => {this.setState({boards: data}); console.log(this.state);
    //         })
    // }

    render() {
        return [
            <Jumbotron>
                <h1 className="display-3">Welcome to Prello !</h1>
                <p className="lead">Wooow ! this is way better than Trello.</p>
                <hr className="my-2" />
                <p>It is built with Node.js and React.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>,
            <legend>Board titles loaded from the API : </legend>,
            <ul> {this.state.boards.map(b => <li>{b.title}</li>)} </ul>
        ]
    }
}

export default Home;