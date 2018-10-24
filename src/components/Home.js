import React, { Component } from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import PropTypes from  'prop-types'

const Home =()=>{
    return (
        <header>
            <Jumbotron>
                <h1 className="display-3">Welcome to Prello !</h1>
                <p className="lead">Wooow ! this is way better than Trello.</p>
                <hr className="my-2" />
                <p>It is built with Node.js and React.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </header>,
        <section>
            <Container>
                <legend>Board titles loaded from the API : </legend>,
            </Container>
        </section>
    )
}

export default Home