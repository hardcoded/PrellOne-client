import React from 'react';
import PropTypes from  'prop-types'
import { Row, Col, Button } from 'reactstrap'

const AddCard = ({listId, boardId, addCard, hidden, hide, show})=> {
  let input
  

  return (
    <div>
    <form onSubmit={e => {e.preventDefault()
      addCard(input.value, listId, boardId)
      input.value = ''
    }}>
    
      {
        hidden &&
        <Row>
          <Col xs="12">
            <input className="mb-2 form-control" placeholder="Type a title for the card"  ref={node => input = node} autoFocus={true} />
          </Col>
          <Col>
            <Button block color="success" type="submit">Add</Button>
          </Col>
          <Col>
            <Button block color="danger" onClick={() => hide(listId)}>Cancel</Button>
          </Col>
        </Row>
      }
      {!hidden &&
        <Row>
          <Col>
            <Button block outline color="primary" onClick={() => show(listId)}>Add a card</Button>
          </Col>
        </Row>
      }
    </form>
    </div>
  );
}

AddCard.propTypes={
  listId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
}

export default AddCard