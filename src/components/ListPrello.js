import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardFooter, Badge } from 'reactstrap'
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from '../containers/CardPrello.container'
import CardPrelloComponent from '../components/CardPrello'
import AddCard from '../containers/AddCard.container'

const ListPrello = ({id, title, cardIds}) =>(
    <Card className="bg-light mb-3" tag="div">
      <CardHeader>
        {title} 
        <Badge  color = "primary" className="float-right">{cardIds.length}</Badge> 
      </CardHeader>
      <Droppable droppableId={id}>
        {
          (provided) => (
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card-body" style={{flexGrow: 1, minHeight:'50px'}}>
              {
                cardIds.map((cardId,key) => 
                  <CardPrello key={cardId} cardId={cardId} index={key}></CardPrello>
                )
              }
              {provided.placeholder}
            </div>
          )
        }
        </Droppable>
      <CardFooter>
      <AddCard listId={id}></AddCard>
      </CardFooter>
    </Card>
  )

ListPrello.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardIds: PropTypes.arrayOf(CardPrelloComponent
    ).isRequired
}

export default ListPrello;