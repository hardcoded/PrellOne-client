
import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, Badge, Input, Row, Col } from 'reactstrap';
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from './CardPrello'

class ListPrello extends Component {

  constructor(props){
    super(props)
    this.state = { 
      ...props,
      newCardTitle : '',
      isHidden: true
    }
    
    this.toggleHidden = this.toggleHidden.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange (event) {
    this.setState({newCardTitle: event.target.value})
  }

  handleSubmit = () => {
    const newCard = {
      id: 'cardX', 
      title: this.state.newCardTitle,
      description: '',
      members: [],
      labels: [],
      due_date: null,
      creation_date: null
    }
    const newCards = this.state.cards
    newCards.push(newCard)

    const newList = this.state.list
    newList.cardIds.push(newCard.id)

    this.setState({
      cards: newCards,
      list: newList,
      newCardTitle: ''
    })
    this.toggleHidden()
  
  }

  render() {
    return (
      <Card className="bg-light mb-3" tag="div">
        <CardHeader>
          {this.state.list.title } <Badge  color = "primary" className="float-right">{this.state.cards.length}</Badge> 
        </CardHeader>
          <Droppable droppableId={this.state.list.id}>
          { (provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card-body"
              style={{flexGrow: 1, minHeight:'50px'}}
              >
              {this.state.cards.map((card, index) => {
                const labels = card.labels.map(labelId => this.state.labels[labelId]) 
                return <CardPrello key={card.id} labels={labels} card={card} index={index}></CardPrello>
              })}
              {provided.placeholder}
              {!this.state.isHidden && 
              <Input className="mb-2" name="newCardTitle" id="newCardTitle" placeholder="type the card title"  value={this.state.newCardTitle} onChange={this.handleChange}/>}
              {!this.state.isHidden && 
              <Row>
                <Col>
                  <Button color="success" block onClick={this.handleSubmit}>Add a card</Button>
                </Col>
                <Col>
                  <Button color="danger" block  onClick={(e) => this.toggleHidden()}>Cancel</Button>
                </Col>
              </Row>}
            </div>
          )}
          </Droppable>
        <CardFooter>
          <Button outline color="primary" block onClick={(e) => this.toggleHidden()}>Add another card</Button>
        </CardFooter>
      </Card>
    )
  }
}

export default ListPrello;