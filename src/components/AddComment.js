import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from  'prop-types';

const AddComment = ({userName, photo, addComment}) => {
  let contentInput

  return (
    <div className="container-fluid">
      <Row className="mb-1">
        <Col xs="auto" className="p-0">
          <img width="65px" src={photo} alt={userName} className={"img-fluid rounded"}/>
        </Col>
        <Col>
        <Row>
          <Col xs="12">
            <h6><b>{userName}</b></h6>
          </Col>
          <Col xs="12" className="mb-2">
            <textarea className="form-control" rows="2" ref={node => contentInput = node}></textarea>
          </Col>
          <Col xs="auto">
            <Button color="primary" onClick = {() => {
              addComment(contentInput.value)
              contentInput.value = ''
            }}>
              Send
            </Button>
          </Col>
        </Row>
        </Col>
      </Row>
    </div>
  );
};


AddComment.propTypes={
  id: PropTypes.string,
  content:PropTypes.string,
  userName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
  
}

export default AddComment;