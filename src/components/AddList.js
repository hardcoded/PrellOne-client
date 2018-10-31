import React from 'react';
import PropTypes from  'prop-types'
import { Row, Col } from 'reactstrap'

const AddList = ({boardId, addList, hidden, hide, show})=> {
  let input
  

  return (
    <div>
    <form>
    {hidden && 
    <input className="mb-2" placeholder="Type the title of the list"  ref={node => input = node} />}
    {hidden && 
    <Row>
      <Col>
        <button type="submit" onClick = {e => {e.preventDefault()
          addList(boardId, input.value)
          input.value = ''
        }}>Add a list</button>
      </Col>
      <Col>
        <button onClick = {() => show()}>Cancel</button>
      </Col>
    </Row>}
    {!hidden && 
    <button onClick = {() => hide()}>Add another list</button>}
    </form>
    </div>
  );
}

AddList.propTypes={
  boardId: PropTypes.string.isRequired,
  addList: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired
}

export default AddList