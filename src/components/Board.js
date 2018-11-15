import React from 'react'
import Member from '../containers/Member.container'
import AddMember from '../containers/AddMember.container'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import AddList from '../containers/AddList.container'
import { Row, Col } from 'reactstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import ModalCard from '../containers/ModalCard.container'
import PropTypes from 'prop-types'

const Board = ({ id, title, lists, members, onDragEnd }) => (

    <div>
        <section>
            <div className="container-fluid mt-4">
                <h1 className="boardTitle">{title}</h1>
                <Row className="scrolling-wrapper-flexbox" style={{padding: '20px'}}>
                    <Col>
                        <Row>
                            <h5 style={{marginRight: '20px'}}>Members</h5>
                            {
                                members && members.map(member => (
                                        <div style={{marginRight:"5px"}}>
                                            <Member memberId={member.id} size={'35px'}></Member>
                                        </div>
                                ))
                            }
                            <AddMember idBoard={id}></AddMember>
                        </Row>
                    </Col>
                </Row>
                <Row className="scrolling-wrapper-flexbox" style={{marginTop: '20px'}}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {
                            lists.map((list, index) => (
                                <Col xs="12" sm="6" md="4" lg="3" key={index}>
                                    <ListPrello id={list.id}></ListPrello>
                                </Col>
                            ))}
                    </DragDropContext>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <AddList boardId={id}></AddList>
                    </Col>
                </Row>
            </div>
            <ModalCard />
        </section>
    </div>
)


Board.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lists: PropTypes.arrayOf(ListPrelloCompo),
    members: PropTypes.array,
    onDragEnd: PropTypes.func.isRequired
}

export default Board
