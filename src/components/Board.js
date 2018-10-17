import React, { Component } from 'react'
import ListPrello from './ListPrello'
import { Row, Col } from 'reactstrap'
import demoData from './demo-data'

class Board extends Component {
  state = demoData
  render() {
    return  [
              <Row>
                <Col>
                  <h1>Board</h1>
                </Col>
              </Row>,
              <Row  className="scrolling-wrapper-flexbox">
              {this.state.listOrder.map((listId) => {
                const list = this.state.lists[listId];
                const cards = list.cardIds.map(taskId => this.state.cards[taskId]);
                return (
                  <Col className="list" md="5" lg="4" >
                    <ListPrello key={list.id} list={list} cards={cards}></ListPrello>
                  </Col>
                )
              })}
              </Row>
            ]
  }
}

export default Board
