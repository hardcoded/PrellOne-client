import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/list.action'
import { Button,Input, Row, Col } from 'reactstrap';

const AddCard = ({ dispatch }, listId, hide) => {
  let newCardTitle

  return (
    <div>
      <Input className="mb-2" name="newCardTitle" id="newCardTitle" placeholder="type the card title"  value={newCardTitle}/>
      <Row>
        <Col>
          <Button color="success" block onClick={
            dispatch(addCard(listId, {
              title: newCardTitle,
              description: '',
              members: [],
              labels: [],
              due_date: null}))
              }> 
            Add a card
          </Button>
        </Col>
        <Col>
          <Button color="danger" block  onClick={hide()}>Cancel</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect()(AddCard)