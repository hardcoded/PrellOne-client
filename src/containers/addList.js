import React from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions/list.action'
import { Button,Input, Row, Col } from 'reactstrap';

const AddList = ({ dispatch }, boardId, hide) => {
  let newListTitle

  return (
    <div>
      <Input className="mb-2" name="newCardTitle" id="newCardTitle" placeholder="type the card title"  value={newListTitle}/>
      <Row>
        <Col>
          <Button color="success" block onClick={
            dispatch(addList(boardId, {
              title: newListTitle,
              description: '',
              cardIds: [],
              toggleAddCard: false }))
              }> 
            Add a List
          </Button>
        </Col>
        <Col>
          <Button color="danger" block  onClick={hide()}>Cancel</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect()(AddList)