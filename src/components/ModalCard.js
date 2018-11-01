import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col} from 'reactstrap';
import Member from '../containers/Member.container'
import Label from '../containers/Label.container'
import Comment from '../containers/Comment.container'
import PropTypes from  'prop-types'
import AddComment from '../containers/AddComment.container';

const ModalCard = ({cardId, modal, title, description, labelIds, memberIds, comments, closeModal})=>(
  <div>
    <Modal isOpen={modal} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>{title}</ModalHeader>
        <ModalBody className="container-fluid">
          <h5>Labels</h5>
          <Row className="pl-3 mb-3">
            {
              labelIds && labelIds.map(labelId => 
                <Col xs="auto" className="p-0">
                  <Label labelId={labelId}></Label>
                </Col>
              )
            }
          </Row>
          <h5>Description</h5>
          <p>{description}</p>
          <h5>Members</h5>
          <Row className="pl-3 mb-3">
            {
              memberIds && memberIds.map(memberId => 
                <Col xs="2" className="p-2">
                  <Member memberId={memberId}></Member>
                </Col>
              )
            }
          </Row>
          <h5>Comments</h5>
          {
            comments && comments.map(comment => 
              <Comment commentId={comment.id} content={comment.content} userId={comment.userId}></Comment>
            )
          }
          <AddComment userId='user1' cardId={cardId}></AddComment>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
   </Modal>
</div>
  )

ModalCard.propTypes={
  cardId: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  labelIds: PropTypes.array,
  memberIds: PropTypes.array,
  comments: PropTypes.array,
  closeModal: PropTypes.func.isRequired
  
}
export default ModalCard