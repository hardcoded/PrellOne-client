import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import PropTypes from  'prop-types';
import Team from '../containers/Team.container';
import AddTeam from '../containers/AddTeam.container';

const TeamsManager = ({teams}) => (
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>My teams</h1> 
                </Col>
            </Row>
            {
                teams.map((team, index) => (
                    <Row key={index}>
                        <Col>
                            <Team key={team.id} teamId={team.id}></Team>
                        </Col>
                    </Row>
                ))
            }
            <div>
                <AddTeam></AddTeam>
            </div>
        </Container>    
    </div>

)

TeamsManager.propTypes={
    teams: PropTypes.array.isRequired
}
    
export default TeamsManager;