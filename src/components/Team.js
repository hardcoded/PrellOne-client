import React from 'react'
import Member from '../containers/Member.container'
import BoardCompo from '../components/Board'
import MemberCompo from '../components/Member'
import { Row, Card, CardBody,Col,
    CardTitle} from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from  'prop-types'
import AddMember from '../containers/AddMember.container'
import AddBoard from '../containers/AddBoard.container'
const Team = ({id,name, boards, members,openModalCreateBoard}) => (

    <div >
         <h4>{name}</h4> 
         <Row className="pl-3 mb-3">
                
                    {members.map(member=>(
                    <Col xs="3" sm="3" md="2" lg="1"  >
                     <Member memberId={member.id} ></Member>
                     </Col> 
                    ))} 
                    
        </Row>  
        <Row className="pl-3 mb-3">
            { boards.map(board=> (
                <Col xs="12" sm="6" md="4" lg="3"> 
                    <Card key={board.id} className="bg-light mb-3">
                            <CardBody>
                                <CardTitle>
                                    <Link  to={"/board/"+board.id} st>
                                        {board.title}
                                    </Link>    
                                </CardTitle>
                            </CardBody>
                    </Card>
                </Col>
            ))}
            <Col xs="12" sm="6" md="4" lg="3"> 
                <Card onClick={() => openModalCreateBoard(id)} className="card text-white bg-primary mb-3" style={{cursor:'pointer'}}>
                    <CardBody>
                        <CardTitle>
                            Create a board...
                        </CardTitle>
                    </CardBody>
                </Card>
                <AddBoard ></AddBoard>
            </Col>
        </Row>
        <Row className="pl-3 mb-3">
        <AddMember idTeam={id}></AddMember>
        </Row>
        
    </div>
)


Team.propTypes={
  id: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  boards:PropTypes.arrayOf(BoardCompo),
  members:PropTypes.arrayOf(MemberCompo),
  openModalCreateBoard: PropTypes.func.isRequired
}

export default Team