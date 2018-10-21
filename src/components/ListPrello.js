
import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, CardHeader, CardFooter, Badge } from 'reactstrap'
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from './CardPrello'
import AddCard from '../containers/addCard'
import Label from './Label';

const ListPrello = (id, title, cards, labels, toggleAddCard) => {
  return (
    <Card className="bg-light mb-3" tag="div">
      <CardHeader>
        {title} <Badge  color = "primary" className="float-right">{cards.length}</Badge> 
      </CardHeader>
        <Droppable droppableId={id}>
        { (provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="card-body"
            style={{flexGrow: 1, minHeight:'50px'}}
            >
            {cards.map((card, index) => {
              const labels = card.labels.map(labelId => labels[labelId]) 
              return <CardPrello key={card.id} labels={labels} card={card} index={index}></CardPrello>
            })}
            {provided.placeholder}
            <AddCard />
          </div>
        )}
        </Droppable>
      <CardFooter>
        <Button outline color="primary" block onClick={(e) => this.toggleHidden()}>Add another card</Button>
      </CardFooter>
    </Card>
  )
}

ListPrello.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(CardPrello),
  labels: PropTypes.arrayOf(Label),
  toggleAddCard: PropTypes.func.isRequired
}

export default ListPrello;