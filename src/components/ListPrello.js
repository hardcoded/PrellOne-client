
import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
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
        <CardTitle>{this.state.title }</CardTitle>
        <ul>            
        {cardItems.map(element => (
            <li><CardPrello key={element.title} card={element}>
            </CardPrello></li>
                
            ))
        }
        </ul>
        <Button>Add card</Button>
      </Card>
    </div> );
    }
}

export default ListPrello;