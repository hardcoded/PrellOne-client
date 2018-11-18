import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardFooter, Badge, Input } from 'reactstrap'
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from '../containers/CardPrello.container'
import AddCard from '../containers/AddCard.container'

const ListPrello = ({list, toggleEditTitle, updateList}) =>(
    <Card className="bg-light mb-3">
      <CardHeader>
        {
          !list.editTitle && [<span  key={list} onClick={() => toggleEditTitle()}>{list.title}</span>, <Badge  key={list.id} color = "primary" className="float-right">{list.cards && list.cards.length}</Badge>]  
        } 
        {
          list.editTitle && <Input 
                              onBlur={() => toggleEditTitle()} 
                              onChange={(e) => updateList({...list, title: e.target.value})} 
                              value={list.title}
                              autoFocus={true}></Input>
        }
        
      </CardHeader>
      <Droppable droppableId={list.id}>
        {
          (provided) => (
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card-body" style={{flexGrow: 1, minHeight:'50px'}}>
              {
                list.cards &&
                list.cards.map((card, index)=> 
                  <CardPrello key={card.id} cardId={card.id} index={index}></CardPrello>
                )
              }
              {provided.placeholder}
            </div>
          )
        }
        </Droppable>
      <CardFooter>
      <AddCard listId={list.id} boardId={list.board}></AddCard>
      </CardFooter>
    </Card>
  )

ListPrello.propTypes = {
  list: PropTypes.object.isRequired,
  toggleEditTitle: PropTypes.func.isRequired,
  updateList: PropTypes.func.isRequired,
}

export default ListPrello;