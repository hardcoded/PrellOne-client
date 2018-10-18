
import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardFooter, CardText, Badge } from 'reactstrap';
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from './CardPrello'

class ListPrello extends Component {
  render() {
    return (
      <Card className="bg-light mb-3" tag="div">
        <CardHeader>
          {this.props.list.title } <Badge  color = "primary" className="float-right">{this.props.cards.length}</Badge> 
        </CardHeader>
          <Droppable droppableId={this.props.list.id}>
          { (provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card-body"
              style={{flexGrow: 1, minHeight:'50px'}}
              >
              {this.props.cards.map((card, index) => {
                const labels = card.labels.map(labelId => this.props.labels[labelId]) 
                return <CardPrello key={card.id} labels={labels} card={card} index={index}></CardPrello>
              })}
              {provided.placeholder}
            </div>
          )}
          </Droppable>
        <CardFooter>
          <Button outline color="primary" block>Add card</Button>
        </CardFooter>
      </Card>
    )
  }
}

export default ListPrello;