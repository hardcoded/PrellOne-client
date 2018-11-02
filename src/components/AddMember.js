import React from 'react';
import PropTypes from  'prop-types'
import { Row, Col, Button } from 'reactstrap'

const AddMember = ({ teamId,addMemberTeam, hidden, hide, show})=> {
  let input
  return (
    <div>
    <form onSubmit={e => {e.preventDefault()
      addMemberTeam(teamId, input.value)
      input.value = ''
    }}>
      {
        hidden &&
        <Row>
          <Col xs="12">
            <input className="mb-2 form-control" placeholder="Type a title for the card"  ref={node => input = node} />
          </Col>
          <Col>
            <Button block color="success" type="submit">Add</Button>
          </Col>
          <Col>
            <Button block color="danger" onClick={() => hide(teamId)}>Cancel</Button>
          </Col>
        </Row>
      }
      {!hidden &&
        <Row>
          <Col>
            <Button block outline color="primary" onClick={() => show(teamId)}>Add a Member</Button>
          </Col>
        </Row>
      }
    </form>
    </div>
  );
}

AddMember.propTypes={
  teamId: PropTypes.string.isRequired,
  addMemberTeam: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
}

export default AddMember