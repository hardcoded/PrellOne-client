import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Button, Row, Col, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import RichTextEditor from 'react-rte';
import Member from '../containers/Member.container'
import Label from '../containers/Label.container'
import Comment from '../containers/Comment.container'
import PropTypes from  'prop-types'
import AddComment from '../containers/AddComment.container';
import DueDate from './DueDate'
import GoogleClient from '../containers/GoogleClient.container'
import AddMember from '../containers/AddMember.container'

const ModalCard = ({
  card,
  isOpen,
  allLabels,
  edit,
  openEditCardDesc,
  editCardDesc,
  descEditorState,
  toggleEdit,
  updateCard,
  closeModal
}) => {

  return (
    <div>
    <Modal isOpen={isOpen} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>
          {
            !edit.title && <div onClick={() => toggleEdit('title')}>{card.title}</div>
          }
          {
            edit.title && 
            <Input 
              onBlur={() => toggleEdit('title')} 
              onChange={(e) => updateCard({...card, title: e.target.value})} 
              value={card.title}>
            </Input>
          }
        </ModalHeader>
        <ModalBody className="container-fluid">
          <h5>Due date</h5>
          <h5>
            <DueDate date={card.dueDate} done={card.done}></DueDate>
          </h5>
          <h6>
            <CustomInput type="checkbox" id="doneCheckbox" checked={card.done} onChange={() => {updateCard({...card, done: !card.done})}} label="Done"/>
          </h6>
          <h5>Labels</h5>
          {
            <Row className="pl-3 mb-3">
              {
                card.labels && card.labels.map((label, index) => 
                  <Col xs="auto" className="p-0" key={label} onClick={() => {updateCard({...card, labels: card.labels.filter((id)=> id !== label)})}}>
                    <Label labelId={label}>
                    </Label>
                  </Col>
                )
              }
              <Col xs="auto" className="p-0">
                <Dropdown isOpen={edit.labels} size="sm" toggle={() => toggleEdit('labels')}>
                  <DropdownToggle caret>
                    Add Label
                  </DropdownToggle>
                  <DropdownMenu>
                    {
                      allLabels && Object.keys(allLabels).filter(label => !card.labels.includes(label)).map((key, index) => 
                        <DropdownItem 
                          key={index}
                          value={key}
                          onClick={() => updateCard({...card, labels: [...card.labels, allLabels[key].id]})}
                        >
                          <Badge className="mr-1" color={allLabels[key].color} style={{minWidth:'5px', width: 'inherit'}}>
                            {allLabels[key].title}
                          </Badge>
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
            
            <div onClick={() => {toggleEdit('description'); openEditCardDesc(card.description)}} dangerouslySetInnerHTML={{__html: card.description}}></div>
          }
          {
            edit.description && 
            <RichTextEditor 
              value={descEditorState} 
              onChange={(value) => {editCardDesc(value)}}/>
          }
          {
            edit.description && 
            <Button className="mt-2" color="success" onClick={(e) => {toggleEdit('description'); updateCard({...card, description: descEditorState.toString('html')})}}>Save</Button>
          }
          <h5>Attached Files</h5>
          <GoogleClient></GoogleClient>
          <h5>Members</h5>
          <Row className="pl-3 mb-3">
            {
              card.members && card.members.map(member=> 
                member && <Col xs="2" className="p-2" key={member}>
                  <Member memberId={member.id} size={'35px'}></Member>
                </Col>
              )
            }
          <AddMember idCard={card.id}></AddMember>
          </Row>
          <h5>Comments</h5>
          {
            card.comments && card.comments.map(comment => 
              <Comment commentId={comment.id} content={comment.content} writer={comment.writer} key={comment}></Comment>
            )
          }
          <AddComment card={card}></AddComment>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
    </Modal>
  </div>
)
}

ModalCard.propTypes = {
  card: PropTypes.object,
  isOpen: PropTypes.bool,
  allLabels: PropTypes.object,
  edit: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func,
  openEditCardDesc: PropTypes.func,
  editCardDesc: PropTypes.func,
  descEditorState: PropTypes.object,
  updateAttribute: PropTypes.func,
  closeModal: PropTypes.func
}

export default ModalCard