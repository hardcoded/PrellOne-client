
import React, { Component } from 'react';
import { Card, Button, CardTitle, CardBody, CardFooter, CardText, Badge } from 'reactstrap';
import CardPrello from './CardPrello'

class ListPrello extends Component {

  
    constructor(props) {
      console.log(props.list)
      super(props);
      this.state = {
        cards:this.props.cards ||[],
        title :this.props.list,
        numberCards:this.props.numberCards||0
      };
    }

render() {
  const cardItems=[{title:"Task1",text:"BBBBBdezdedez"},{title:"Task2",text:"BBBBBdezdedededez"}]
  return (
    <div>
      <Card body outline color="secondary">
        <CardTitle>
          {this.state.title } <Badge color="secondary" className="float-right">{cardItems.length}</Badge> 
        </CardTitle>
        <CardBody>
          <CardText>
          { cardItems.map(element => (
              <CardPrello key={element.title} card={element}></CardPrello>
            )
          )}
          </CardText>
        </CardBody>
        <CardFooter>
          <Button outline color="primary" block>Add card</Button>
        </CardFooter>
      </Card>
    </div> );
    }
}

export default ListPrello;