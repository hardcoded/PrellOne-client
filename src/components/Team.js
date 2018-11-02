import React from 'react'
import Board from '../containers/Board.container'
import Member from '../containers/Member.container'
import BoardCompo from '../components/Board'
import MemberCompo from '../components/Member'
import { Container, Row, Card, CardBody,Col,
    CardTitle} from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from  'prop-types'
import AddMember from '../containers/AddMember.container'
const Team = ({id,name, boards, members}) => (

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
        </Row>

        <AddMember idTeam={id}></AddMember>
    </div>
)


Team.propTypes={
  id: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  boards:PropTypes.arrayOf(BoardCompo),
  members:PropTypes.arrayOf(MemberCompo)
}

export default Team