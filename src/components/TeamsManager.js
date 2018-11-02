import React from 'react';
import { Container} from 'reactstrap';
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
    teams: PropTypes.array.isRequired
}
    
export default TeamsManager;