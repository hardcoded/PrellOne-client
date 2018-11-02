import React from 'react'
import Board from '../containers/Board.container'
import Member from '../containers/Member.container'
import BoardCompo from '../components/Board'
import MemberCompo from '../components/Member'
import { Container, Row, Card, CardBody,
    CardTitle} from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from  'prop-types'

const Team = ({id,name, boards, members}) => (

    <div>
        
         <h1>{name}</h1>   
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
    </div>
)


Team.propTypes={
  id: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  boards:PropTypes.arrayOf(BoardCompo),
  members:PropTypes.arrayOf(MemberCompo)
}

export default Team