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