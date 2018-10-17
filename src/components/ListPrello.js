
import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardFooter, CardText, Badge } from 'reactstrap';
import CardPrello from './CardPrello'

class ListPrello extends Component {


  render() {
    
    return (
      <Card className="bg-light mb-3" tag="div">
        <CardHeader>
          {this.props.list.title } <Badge  color = "primary" className="float-right">{this.props.cards.length}</Badge> 
        </CardHeader>
        <CardBody>
          <CardText tag="div">
          {this.props.cards.map(card => 
            <CardPrello key={card.id} card={card} ></CardPrello>
            )}
          </CardText>
        </CardBody>
        <CardFooter>
          <Button outline color="primary" block>Add card</Button>
        </CardFooter>
      </Card>
    )
  }
}

export default ListPrello;