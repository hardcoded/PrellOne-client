import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardFooter, Badge, Input } from 'reactstrap'
import { Droppable } from 'react-beautiful-dnd'
import CardPrello from '../containers/CardPrello.container'
import AddCard from '../containers/AddCard.container'

const ListPrello = ({list, toggleEditTitle, updateList}) =>(
    <Card className="bg-light mb-3" tag="div">
      <CardHeader>
        {
          !list.editTitle && <span onClick={() => toggleEditTitle()}>{list.title}</span>  
        } 
        {
          list.editTitle && <Input 
                              onBlur={() => toggleEditTitle()} 
                              onChange={(e) => updateList({...list, title: e.target.value})} 
                              value={list.title}></Input>
        }
        <Badge  color = "primary" className="float-right">{list.cards && list.cards.length}</Badge> 
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
                list.cards.map((card,key) => 
                  <CardPrello key={key} cardId={card.id} index={key}></CardPrello>
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