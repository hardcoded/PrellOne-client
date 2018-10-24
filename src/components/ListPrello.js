import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardFooter, Badge } from 'reactstrap'
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from '../containers/CardPrello.container'
import AddCard from '../containers/AddCard.container'

const ListPrello = ({id, title, cardIds, toggleAddCard}) => {
  return (
    <Card className="bg-light mb-3" tag="div">
      <CardHeader>
        {title} <Badge  color = "primary" className="float-right">{cardIds.length}</Badge> 
      </CardHeader>
        <Droppable droppableId={id}>
        { (provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="card-body"
            style={{flexGrow: 1, minHeight:'50px'}}
            >
            {cardIds.map((cardId) => {
              return <CardPrello key={cardId} cardId={cardId}></CardPrello>
            })}
            {provided.placeholder}
          </div>
        )}
        </Droppable>
      <CardFooter>
        <AddCard listId={id}></AddCard>
      </CardFooter>
    </Card>
  )
}

ListPrello.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cardIds: PropTypes.arrayOf(CardPrello).isRequired,
  toggleAddCard: PropTypes.func.isRequired
}

export default ListPrello;