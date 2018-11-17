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
            {name}
        </CardHeader>
        <CardBody>
            <CardText tag="div" >
                <h5>Members</h5>
                <Row className="pl-3 mb-3">
                    {
                        members.map( member => (
                            <Col xs="3" sm="4" md="3" lg="1" className="mb-2" key={member.id}>
                                <Member memberId={member.id} ></Member>
                            </Col> 
                        ))
                    } 
                    <AddMember idTeam={id}></AddMember>
                </Row>  
                    
                <h5>Boards</h5>
                <Row className="pl-3 mb-3">
                    { boards.map(board=> (
                        <Col xs="12" sm="6" md="4" lg="3" className="mb-2" key={board.id}> 
                            <Card key={board.id} className="bg-light">
                                <CardHeader className="text-center">
                                    <CardTitle className="mb-0">
                                        <Link to={"/board/"+board.id} style={{display: 'block', height: '100%'}}>
                                            {board.title}
                                        </Link>    
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Col>
                    ))}
                    <Col xs="12" sm="6" md="4" lg="3"> 
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