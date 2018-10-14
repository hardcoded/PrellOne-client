import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';


class CardPrello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            text: this.props.text,
            member: this.props.member,
            due_date: this.props.due_date,
            creation_date: this.props.creation_date
        };
      }

  render() {
      return(
    <div>
      <Card className="w-25 p-3" body inverse color="info" top width="100%">
        <CardBody>
          <CardTitle>Test {this.props.title}</CardTitle>
          <CardText>Do the JUnit tests{this.props.text}</CardText>
          <Button>Add Comment</Button>
        </CardBody>
      </Card>
    </div>);
  }
}
export default CardPrello