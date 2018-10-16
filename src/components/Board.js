import React, { Component } from 'react'
import ListPrello from './ListPrello'
import { Row, Col } from 'reactstrap'

class Board extends Component {
  render() {
    const lists=["Todo","In progress","Done"]
    return  [
              <Row>
                <Col>
                  <h1>Board</h1>
                </Col>
              </Row>,
              <Row>
                {lists.map((element, index) => (
                  <Col xs="auto" md="6" lg="6" xl="4"  key={index} >
                      <ListPrello list={element}></ListPrello>
                  </Col>
                  )
                )}
              </Row>
            ]
  }
}

export default Board
