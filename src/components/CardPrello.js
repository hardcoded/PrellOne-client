import React from 'react';
import { Card, CardBody, CardText, Row, CardFooter } from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';
import Label from '../containers/Label.container'
import Member from '../containers/Member.container'
import PropTypes from 'prop-types'

const CardPrello = ({ id, title, labels, members, index, openModal }) => (
    <Draggable draggableId={id} index={index}>
        {
            (provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card outline className="mb-1" color="secondary" onClick={() => openModal(id)}>
                        <CardBody className="p-2">
                            <CardText tag="div" className="container">
                                <Row>
                                    {labels &&
                                        labels.map(labelId => <Label key={labelId} labelId={labelId}></Label>)
                                    }
                                </Row>
                                <Row >
                                    <div style={{ margin: "10px" }}>{title}</div>
                                </Row>
                                <Row style={{ float: 'right' }}>
                                {
                                    members && members.map(member => (
                                        member && <div style={{ marginRight: "5px" }}>
                                            <Member memberId={member.id} size={'20px'}></Member>
                                        </div>
                                    ))
                                }
                                </Row>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }

    </Draggable>
)

CardPrello.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    index: PropTypes.number,
    openModal: PropTypes.func.isRequired

}
export default CardPrello