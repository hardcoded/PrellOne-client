import React, { Component } from 'react';
import { Card, CardBody,
  CardTitle} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class CardPrello extends Component {

    constructor(props) {
        super(props);
        this.state = props.card
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

  render() {
    console.log(this.props)
      return(
    <div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
        <ModalBody>
          {this.state.text}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Card outline className="mb-1" color="secondary" onClick={this.toggle}>
        <CardBody>
          <CardTitle>{this.state.title}</CardTitle>
        </CardBody>
      </Card>
    </div>);
  }
}
export default CardPrello