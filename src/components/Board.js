import React, { Component } from 'react'
import ListPrello from './ListPrello'
import { Row, Col } from 'reactstrap'

class Board extends Component {
  render() {
    const list=["Todo","In progress","Done", "Done","Done"]
    return  [
              <Row>
                <Col>
                  <h1>Board</h1>
                </Col>
              </Row>,
              <Row className="scrolling-wrapper-flexbox">              
                {list.map(element => (
                    <Col className="list" lg="4">
                      <ListPrello key={element} list={element}></ListPrello>
                    </Col>
                  )
                )}
              </Row>
            ]
  }
}

export default Board
