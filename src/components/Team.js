import React from 'react'
import Member from '../containers/Member.container'
import BoardCompo from '../components/Board'
import MemberCompo from '../components/Member'
import { Row, Card, CardBody, CardText, CardHeader, Col, CardTitle} from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from  'prop-types'
import AddMember from '../containers/AddMember.container'
import AddBoard from '../containers/AddBoard.container'

const Team = ({id,name, boards, members,openModalCreateBoard}) => (
    <Card className="mb-2">
        <CardHeader className="text-center">
            <h5>{name}</h5>
        </CardHeader>
        <CardBody>
            <CardText tag="div">
                <h3>Members</h3>
                <Row className="pl-3 mb-3">
                    {
                        members.map( member => (
                            <Col xs="3" className="p-2" key={member.id}>
                                <Member memberId={member.id} ></Member>
                            </Col> 
                        ))
                    } 
                    <AddMember idTeam={id}></AddMember>
                </Row>  
                    
                <h5>Boards</h5>
                <Row className="pl-3 mb-3">
                    { boards.map(board=> (
                        <Col xs="6" className="mb-2" key={board.id}> 
                            <Card key={board.id} className="bg-light">
                                <CardHeader>
                                    
                                        <Link to={"/board/"+board.id}>
                                            {board.title}
                                        </Link>    
                                  
                                </CardHeader>
                            </Card>
                        </Col>
                    ))}
                    <Col xs="4" sm="4" md="4" lg="6"> 
                        <Card onClick={() => openModalCreateBoard(id)} className="text-white bg-primary" style={{cursor:'pointer'}}>
                            <CardHeader className="text-center">
                                &#43;
                            </CardHeader>
                        </Card>
                        <AddBoard/>
                    </Col>
                </Row>
            </CardText>
        </CardBody>
    </Card>
)


Team.propTypes={
  id: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  boards:PropTypes.arrayOf(BoardCompo),
  members:PropTypes.arrayOf(MemberCompo),
  openModalCreateBoard: PropTypes.func.isRequired
}

export default Team