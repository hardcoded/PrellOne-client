import React, { Component } from 'react';
import { Card, CardBody, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input} from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';
import Label from './Label'

class CardPrello extends Component {

    constructor(props) {
        super(props);
        this.state = {
          ...props,
          modal: false,
          newDescription: '',
          isHidden: true
        }
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      

  render() {
      return(
    <div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.state.className}>
        <ModalHeader toggle={this.toggle}>{this.state.card.title}</ModalHeader>
        <ModalBody>
          <h5>Description</h5>
          <p>{this.state.card.description}</p>
          <h5>Members</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Draggable draggableId={this.state.card.id} index={this.state.index}>
        {(provided) => (
          <div 
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <Card outline className="mb-1" color="secondary" onClick={this.toggle}>
              <CardBody className="p-2">
                <CardText className="container">
                  <Row>
                    {this.state.labels.map(label => <Label label={label}></Label> )}
                  </Row>
                  <Row>
                    {this.state.card.title}
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </div>
        )}
      </Draggable>
    </div>);
  }
}
export default CardPrello