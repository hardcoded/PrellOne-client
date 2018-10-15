import React, { Component } from 'react'
import ListPrello from './ListPrello'
import { Row, Col } from 'reactstrap'

class Board extends Component {
  render() {
    const list=["Todo","In progress","Done"]
    return  [
              <Row>
                <Col>
                  <h1>Board</h1>
                </Col>
              </Row>,
              <Row>
                {list.map(element => (
                  <Col xs="auto" md="6" lg="6" xl="4">
                      <ListPrello key={element} list={element}></ListPrello>
                  </Col>
                  )
                )}
              </Row>
            ]
  }
}

export default Board
