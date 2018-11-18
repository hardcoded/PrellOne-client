import axios from 'axios'
import API_URL from '../config'


/**
 * Get all informations about one team
 * @param {string} teamId the id of the team
 * @return {*} team data
 */
export const getTeam = async (teamId) => {
  try {
    const team = await axios.get(`${API_URL}/api/teams/${teamId}`)
    return team.data
  }
  catch (error) {
    throw error.response
  }
}

/**
 * get all the teams
 * @return {*} the data teams 
 */
export const getTeams=async()=>{
  try {
    const teams = await axios.get(`${API_URL}/api/teams`)
    return teams.data
  }
  catch (error) {
    throw error.response
  }
}

/**
 * Create a new team
 * @param {Team} team the new team
 * @return {*} the new team data
 */
export const postTeam = async (team) => {
  try {
    const newTeam = await axios.post(`${API_URL}/api/teams/`, team)
    return newTeam.data
  }
  catch (error) {
    throw error.response
  }
}

/**
 * Add a member to a team
 * @param {string} teamId 
 * @param {string} username 
 * @return {*} the member added to the team
 */
export const addMemberTeam = async (teamId, username) => {
  try {
    const addedMember = await axios.put(`${API_URL}/api/teams/addMember`, {id: teamId, username: username})
    return addedMember.data
  }
  catch (error) {
    throw error.response
  }
}