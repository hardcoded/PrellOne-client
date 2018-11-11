import React from 'react';
import PropTypes from  'prop-types'
import { Row, Col, Button } from 'reactstrap'

const AddTeam = ({addTeam, user, hidden, hide, show})=> {
  let input
  

  return (
    <div>
    <form>
    {hidden && 
    <Row>
      <Col xs="12">
        <input className="mb-2 form-control" placeholder="Type the title of the list"  ref={node => input = node} />
      </Col>
      <Col xs="6">
        <Button block color="success" type="submit" onClick = {e => {e.preventDefault()
          addTeam(input.value, user)
          input.value = ''
        }}>Add a Team</Button>
      </Col>
      <Col xs="6">
        <Button block color="danger" onClick = {() => show()}>Cancel</Button>
      </Col>
    </Row>}
    {!hidden && 
    <Button block outline color="primary" onClick = {() => hide()}>Create another Team</Button>}
    </form>
    </div>
  );
}

AddTeam.propTypes={
  user: PropTypes.string.isRequired,
  addTeam: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired
}

export default AddTeam