import React from 'react';
import { Container, Jumbotron, Button, Row } from 'reactstrap';
import BoardCompo from '../components/Board'
import PropTypes from  'prop-types'

const Home = ({boards}) => (
            <div>
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
            </header>
            <section>
                <Container>
                    <legend>Board titles loaded from the API : </legend>
                    <Row className="scrolling-wrapper-flexbox">
                     {
                        boards.map(board =>(board.title
                        ))}
                    </Row>
                </Container>
            </section>
            </div>
    )

Home.propTypes={
    boards:PropTypes.arrayOf(BoardCompo)
  }
  

export default Home;