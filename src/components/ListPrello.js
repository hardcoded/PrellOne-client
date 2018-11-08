import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardFooter, Badge } from 'reactstrap'
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from '../containers/CardPrello.container'
import AddCard from '../containers/AddCard.container'

const ListPrello = ({id, title, cards}) =>(
    <Card className="bg-light mb-3" tag="div">
      <CardHeader>
        {title} 
        <Badge  color = "primary" className="float-right">{cards && cards.length}</Badge> 
      </CardHeader>
      <Droppable droppableId={id}>
        {
          (provided) => (
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card-body" style={{flexGrow: 1, minHeight:'50px'}}>
              {
                cards &&
                cards.map((card,key) => 
                  <CardPrello key={card} cardId={card.id} index={key}></CardPrello>
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
  cards: PropTypes.array.isRequired
}

export default ListPrello;