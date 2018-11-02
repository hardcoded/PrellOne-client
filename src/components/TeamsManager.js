import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Card, CardBody,
    CardTitle } from 'reactstrap';
import PropTypes from  'prop-types';
import Team from '../containers/Team.container';
import AddTeam from '../containers/AddTeam.container';

const TeamsManager = ({teams}) => (
    <Container>
        <div>
                {teams.map(team=> (
                <Team key={team.id} teamId={team.id}></Team>
                ))}
        </div>
        <div>
            <AddTeam></AddTeam>
        </div>
    </Container>
)

TeamsManager.propTypes={
}
    
export default TeamsManager;