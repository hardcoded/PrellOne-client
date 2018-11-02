import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Button, Row, Col} from 'reactstrap';
import Member from '../containers/Member.container'
import Label from '../containers/Label.container'
import Comment from '../containers/Comment.container'
import PropTypes from  'prop-types'
import AddComment from '../containers/AddComment.container';
import DueDate from './DueDate'

const ModalCard = ({id, title, description, labelIds, memberIds, comments, dueDate, done, isOpen, toggleDone, closeModal})=>(
  <div>
    <Modal isOpen={isOpen} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>{title}</ModalHeader>
        <ModalBody className="container-fluid">
          <h5>Due date</h5>
          <h5>
            <DueDate date={dueDate} done={done}></DueDate>
          </h5>
          <h6>
            <CustomInput type="checkbox" id="doneCheckbox" checked={done} onChange={() => toggleDone(id)} label="Done"/>
          </h6>
          <h5>Labels</h5>
          <Row className="pl-3 mb-3">
            {
              labelIds && labelIds.map(labelId => 
                <Col xs="auto" className="p-0" key={labelId}>
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
                <Col xs="2" className="p-2" key={memberId}>
                  <Member memberId={memberId}></Member>
                </Col>
              )
            }
          </Row>
          <h5>Comments</h5>
          {
            comments && comments.map(comment => 
              <Comment commentId={comment.id} content={comment.content} userId={comment.userId} key={comment}></Comment>
            )
          }
          <AddComment userId='user1' cardId={id}></AddComment>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
   </Modal>
</div>
  )

ModalCard.propTypes={
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  labelIds: PropTypes.array,
  memberIds: PropTypes.array,
  comments: PropTypes.array,
  dueDate: PropTypes.string,
  closeModal: PropTypes.func.isRequired
  
}
export default ModalCard