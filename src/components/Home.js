import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boards: [
                {title: "My Board 1"}, 
                {title: "My Board 2"}, 
                {title: "My Board 3"}, 
                {title: "My Board 4"}, 
                {title: "My Board 5"}
            ]
        }
    }

    // componentWillMount() {
    //     fetch(`/api/board/`)
    //         .then(res => {
    //             console.log(res);
    //             res.json()
    //         })
    //         .then(data => {
    //             this.setState({boards: data}); 
    //             console.log(this.state);
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
            <ul> {this.state.boards.map((board, index) => <li id={index}>{board.title}</li>)} </ul>
        ]
    }
}

export default Home;