import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Button, Row, Col, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
  labels,
  allLabels,
  members,
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
          {
            <Row className="pl-3 mb-3">
              {
                labels && labels.map((label, index) => 
                  <Col xs="auto" className="p-0" key={label} onClick={() => {updateAttribute(id, 'labels', labels.filter((id)=> id !== label))}}>
                    <Label labelId={label}>
                    </Label>
                  </Col>
                )
              }
              <Col xs="auto" className="p-0">
                <Dropdown isOpen={edit.labels} size="sm" toggle={() => toggleEdit(id, 'labels')}>
                  <DropdownToggle caret>
                    Add Label
                  </DropdownToggle>
                  <DropdownMenu>
                    {
                      allLabels && Object.keys(allLabels).map((key, index) => 
                        <DropdownItem 
                          value={key}
                          onClick={() => updateAttribute(id, 'labels', [...labels, allLabels[key].id])}
                        >
                          {allLabels[key].title}
                        </DropdownItem>
                      )
                    }
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          }
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
              members && members.map(member=> 
                <Col xs="2" className="p-2" key={member}>
                  <Member memberId={member}></Member>
                </Col>
              )
            }
          </Row>
          <h5>Comments</h5>
          {
            comments && comments.map(comment => 
              <Comment commentId={comment.id} content={comment.content} writer={comment.writer} key={comment}></Comment>
            )
          }
          <AddComment writer="5be2a5cca8ec9a0fcfcb38ad" cardId={id}></AddComment>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
    </Modal>
  </div>
)
}

ModalCard.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  labels: PropTypes.array,
  allLabels: PropTypes.object,
  members: PropTypes.array,
  comments: PropTypes.array,
  dueDate: PropTypes.string,
  done: PropTypes.bool,
  edit: PropTypes.object,
  toggleEdit: PropTypes.func,
  openEditCardDesc: PropTypes.func,
  editCardDesc: PropTypes.func,
  descEditorState: PropTypes.object,
  updateAttribute: PropTypes.func,
  toggleDone: PropTypes.func,
  closeModal: PropTypes.func
}

export default ModalCard