
import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import CardPrello from './CardPrello'

class ListPrello extends Component {
    constructor(props) {
      super(props);
      this.state = {
        cards:this.props.cards ||[],
        title :this.props.title,
        numberCards:this.props.numberCards
      };
    }

render() {
  return (
    <div>
      <Card body outline color="secondary">
        <CardTitle>{this.props.title} {this.props.numberCards}</CardTitle>
        <ul>            
        {this.state.cards.map(element => (
            <li><CardPrello card={element}>
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