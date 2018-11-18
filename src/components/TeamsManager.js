import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import PropTypes from  'prop-types';
import Team from '../containers/Team.container';
import AddTeam from '../containers/AddTeam.container';

const TeamsManager = ({teams}) => (
    <div className="container-fluid mt-4">
      
            <Row>
                <h1>My teams</h1> 
            </Row>   
            <Row>
            {
                teams.map(team => (
                    <Row key={team.id}>
                        <Col>
                            <Team key={team.id} teamId={team.id}></Team>
                        </Col>
                  </Row>
                ))
 
            }
            <Col xs="12" sm="6" md="4" lg="3" className="mb-3 mt-3">
                <AddTeam></AddTeam>
            </Col>
            </Row>
    </div>

)

TeamsManager.propTypes={
    teams: PropTypes.array.isRequired
}
    
export default TeamsManager;