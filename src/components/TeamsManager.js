import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import PropTypes from  'prop-types';
import Team from '../containers/Team.container';
import AddTeam from '../containers/AddTeam.container';

const TeamsManager = ({teams}) => (
    <div className="container-fluid mt-4">
      
            <Row>
                <Col>
                    <h1>My teams</h1>
                </Col>
            </Row>   
            <Row>
            {
                teams.map(team => (
                        <Col key={team.id} xs="12" sm="6" md="4" lg="3">
                            <Team teamId={team.id}></Team>
                        </Col>
                ))
            }
            </Row>
            <div>
                <AddTeam></AddTeam>
            </div> 
    </div>

)

TeamsManager.propTypes={
    teams: PropTypes.array.isRequired
}
    
export default TeamsManager;