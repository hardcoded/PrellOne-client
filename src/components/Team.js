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
         <h1>{name}</h1> 
         <Row className="pl-3 mb-3" >
                  <Col xs="2" className="p-2">
                  {members.map(member=>(
                     <Member memberId={member} ></Member>
                 ))} 
                 </Col>
                  
        </Row>  
        <Row className="scrolling-wrapper-flexbox">
        {  
          boards.map(board=> (
            <Card>
            <CardBody>
                <CardTitle>
                <Link className="nav-link" to={"/board/"+board.id}>
                    {board.title}
                </Link>
                </CardTitle>
            </CardBody>
        </Card>
        ))}
            <Card onClick={() => openModalCreateBoard()}>
                            <CardBody>
                                <CardTitle>
                                    Create a board...
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <AddBoard/>
        </Row>

        <AddMember idTeam={id}></AddMember>
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