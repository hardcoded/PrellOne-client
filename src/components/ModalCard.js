import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Button, Row, Col, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RichTextEditor from 'react-rte';
import DatePicker from '../containers/DatePicker.container'
import Member from '../containers/Member.container'
import Label from '../containers/Label.container'
import Comment from '../containers/Comment.container'
import PropTypes from  'prop-types'
import AddComment from '../containers/AddComment.container';
import DueDate from './DueDate'
import GoogleClient from '../containers/GoogleClient.container'
import FileUploader from '../containers/FileUploader.container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModalCard = ({
  card,
  isOpen,
  allLabels,
  edit,
  openEditCardDesc,
  editCardDesc,
  descEditorState,
  toggleEdit,
  closeEdit,
  updateCard,
  download,
  closeModal,
  allMembers
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
          <Row>
            <Col xs="12">
              <h5>Due date</h5>
              <h5>
                {
                  !edit.date && <div onClick={() => toggleEdit('date')}><DueDate date={card.dueDate} done={card.done}></DueDate></div>
                }
                {
                  edit.date && 
                  <DatePicker closeEdit={() => closeEdit('date')} card={card} updateCard={updateCard}></DatePicker>
                }
              </h5>
            </Col>
            <Col xs="12">
              <h6>
                <CustomInput type="checkbox" id="doneCheckbox" checked={!!card.done} onChange={() => {updateCard({...card, done: !card.done})}} label="Done"/>
              </h6>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12">
              <h5>Labels</h5>
            </Col>
          </Row>
          {
            <Row className="pl-3">
              {
                card.labels && card.labels.map(label => 
                  <Col xs="auto" className="p-0" key={label} onClick={() => {updateCard({...card, labels: card.labels.filter((id)=> id !== label)})}}>
                    <Label editable={false} labelId={label}></Label>
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
                      allLabels && Object.keys(allLabels).filter(label => !card.labels.includes(label)).map((key, ind) => 
                        <DropdownItem 
                          key={ind}
                          value={key}
                          onClick={() => updateCard({...card, labels: [...card.labels, allLabels[key].id]})}
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
          <Row className="mt-3">
            <Col xs="12">
              <h5>Description</h5>
            </Col>
          </Row>
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
          <Row className="mt-3">
            <Col xs="12">
              <h5>Attached Files</h5>
            </Col>
          </Row>
          <Row>
          {
            card.attachments.map(file => 
              ( 
                <Col className="mb-2" xs="4">
                  <div className="text-center" style={{cursor: 'pointer'}} onClick = {() => download(file.name)}>
                    <div className="display-4 mb-0"><FontAwesomeIcon icon="file" /></div>
                    <small>{file.name}</small>
                  </div>
                </Col>    
              )
            )
          }
          </Row>
          <Row>
            <Col xs="6">
              <FileUploader updateCard={updateCard} cardId={card.id}></FileUploader>
            </Col>
            <Col xs="6">
              <GoogleClient></GoogleClient>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12">
              <h5>Members</h5>
            </Col>
          </Row>
          <Row className="pl-3 mb-3">
            {
              card.members && card.members.map(member=> 
                <Col xs="2" className="p-2" key={member}>
                  <Member memberId={member}></Member>
                </Col>
              )
            }
            <Dropdown isOpen={edit.members} size="sm" toggle={() => toggleEdit('members')}>
              <DropdownToggle caret>
                Add Member
              </DropdownToggle>
                  <DropdownMenu>
                    {
                      allMembers && Object.keys(allMembers).filter(member => !card.members.includes(member)).map(member => 
                        <DropdownItem 
                          key={member}
                          value={member}
                          onClick={() => updateCard({...card, members: [...card.members, allMembers[member].id]})}
                        >
                          {allMembers[member].username}
                        </DropdownItem>
                      )
                    }
                  </DropdownMenu>
                </Dropdown>
          </Row>
          <Row>
            <Col xs="12">
              <h5>Comments</h5>
            </Col>
          </Row>
          {
            card.comments && card.comments.map((comment,i) => 
              <Comment key={i} commentId={comment.id} content={comment.content} writer={comment.writer} ></Comment>
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
  closeEdit: PropTypes.func,
  openEditCardDesc: PropTypes.func,
  editCardDesc: PropTypes.func,
  descEditorState: PropTypes.object,
  updateAttribute: PropTypes.func,
  download: PropTypes.func,
  closeModal: PropTypes.func
}

export default ModalCard