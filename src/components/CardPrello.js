import React, { Component } from 'react';
import { Card, CardBody, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row} from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';
import Label from './Label'

class CardPrello extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
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
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.card.title}</ModalHeader>
        <ModalBody>
          {this.props.card.description}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Draggable draggableId={this.props.card.id} index={this.props.index}>
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
                    {this.props.labels.map(label => <Label label={label}></Label> )}
                  </Row>
                  <Row>
                    {this.props.card.title}
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