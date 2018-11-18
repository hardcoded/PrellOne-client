/**
 * 
 * @param {*} teams all the team
 * @return {action} TEAMS_FETCHED action and payload with the teams
 */

export const teamsFetched = (teams) => ({
    type: 'TEAMS_FETCHED',
    teams,
})

/**
 * 
 * @param {*} team the team added
 * @return {action} TEAM_ADDED action and payload with the team
 */
export const teamAdded = (team) => ({
    type: 'TEAM_ADDED',
    team
})

/**
 * 
 * @param {string} id id of the team
 * @return {action} HIDE_ADD_MEMBER action and payload with id of the team
 */
export const hideAddMember = id => ({
    type: 'HIDE_ADD_MEMBER',
    id
})

/**
 * 
 * @param {string} id id of the team
 * @return {action} SHOW_ADD_MEMBER action and payload with id of the team
 */
export const showAddMember = id => ({
    type: 'SHOW_ADD_MEMBER',
    id
})

/**
 * @param {Member} member the new member of the team
 * @param {string} id id of the team
 * @return {action} MEMBER_ADDED_TEAM action and payload with id of team and the new member
 */
export const memberAddedTeam = (id, member) => ({
    type: 'MEMBER_ADDED_TEAM',
    id,
    member
})