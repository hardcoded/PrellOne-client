import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardFooter, Badge } from 'reactstrap'
import CardPrello from '../containers/CardPrello.container'
import CardPrelloComponent from '../components/CardPrello'
import AddCard from '../containers/AddCard.container'

const ListPrello = ({id, title, cardIds}) =>(
    <Card className="bg-light mb-3" tag="div">
      <CardHeader>
        {title} 
        <Badge  color = "primary" className="float-right">{cardIds.length}</Badge> 
      </CardHeader>
          <div className="card-body" style={{flexGrow: 1, minHeight:'50px'}}>
            {
              cardIds.map(cardId => 
                <CardPrello key={cardId} cardId={cardId}></CardPrello>
              )
            }
          </div>
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