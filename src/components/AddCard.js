import React from 'react';
import PropTypes from  'prop-types'
import { Row, Col } from 'reactstrap'

const AddCard = ({listId, addCard})=> {
  let input
  

  return (
    <div>
    <form onSubmit={e => {e.preventDefault()
      console.log("BON", input.value)
      addCard(listId, input.value)
      input.value = ''
    }}>
    <input className="mb-2" placeholder="Type a title for the card"  ref={node => input = node} />
    <Row>
      <Col>
    <button type="submit">Add a card</button>
    </Col>
    </Row>
    </form>
    </div>
  );
}

AddCard.propTypes={
  listId: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired
}

export default AddCard