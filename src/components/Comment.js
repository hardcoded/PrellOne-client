import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from  'prop-types';

const Comment = ({id, content, userName, photo}) => {
  return (
    <div className="container-fluid">
      <Row className="mb-1">
        <Col xs="auto" className="p-0">
          <img width="65px" src={photo} alt={userName} className={"img-fluid rounded"}/>
        </Col>
        <Col>
          <h6><b>{userName}</b></h6>
          <p>{content}</p>
        </Col>
      </Row>
    </div>
  );
};


Comment.propTypes={
  id: PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
  
}

export default Comment;