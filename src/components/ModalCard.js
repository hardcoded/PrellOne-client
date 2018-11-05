import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Button, Row, Col, Input} from 'reactstrap';
import RichTextEditor from 'react-rte';
import Member from '../containers/Member.container'
import Label from '../containers/Label.container'
import Comment from '../containers/Comment.container'
import PropTypes from  'prop-types'
import AddComment from '../containers/AddComment.container';
import DueDate from './DueDate'

const ModalCard = ({
  id,
  isOpen,
  title,
  description,
  labelIds,
  memberIds,
  comments,
  dueDate,
  done,
  edit,
  openEditCardDesc,
  editCardDesc,
  descEditorState,
  toggleEdit,
  updateAttribute,
  toggleDone,
  closeModal
}) => {

  return (
    <div>
    <Modal isOpen={isOpen} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>
          {
            !edit.title && <div onClick={() => toggleEdit(id, 'title')}>{title}</div>
          }
          {
            edit.title && 
            <Input 
              onBlur={() => toggleEdit(id, 'title')} 
              onChange={(e) => updateAttribute(id, 'title', e.target.value)} 
              value={title}>
              Hi
            </Input>
          }
        </ModalHeader>
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
          {
            !edit.description && 
            
            <div onClick={() => {toggleEdit(id, 'description'); openEditCardDesc(description)}} dangerouslySetInnerHTML={{__html: description}}></div>
          }
          {
            edit.description && 
            <RichTextEditor 
              value={descEditorState} 
              onChange={(value) => {editCardDesc(value)}}/>
          }
          {
            edit.description && 
            <Button className="mt-2" color="success" onClick={(e) => {toggleEdit(id, 'description'); updateAttribute(id, 'description', descEditorState.toString('html'))}}>Save</Button>
          }
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
          <Button color="danger" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
    </Modal>
  </div>
)
}

ModalCard.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  labelIds: PropTypes.array.isRequired,
  memberIds: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  dueDate: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  edit: PropTypes.object,
  toggleEdit: PropTypes.func.isRequired,
  openEditCardDesc: PropTypes.func.isRequired,
  editCardDesc: PropTypes.func.isRequired,
  descEditorState: PropTypes.object.isRequired,
  updateAttribute: PropTypes.func.isRequired,
  toggleDone: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default ModalCard