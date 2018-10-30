import React from 'react';
import PropTypes from  'prop-types'
import { Row, Col } from 'reactstrap'

const AddList = ({boardId, addList})=> {
  let input
  

  return (
    <div>
    <form onSubmit={e => {e.preventDefault()
      addList(boardId, input.value)
      input.value = ''
    }}>
    <input className="mb-2" placeholder="Type the title of the list"  ref={node => input = node} />
    <Row>
      <Col>
    <button type="submit">Add a list</button>
    </Col>
    </Row>
    </form>
    </div>
  );
}

AddList.propTypes={
  boardId: PropTypes.string.isRequired,
  addList: PropTypes.func.isRequired
}

export default AddList