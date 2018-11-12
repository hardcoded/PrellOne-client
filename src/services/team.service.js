import axios from 'axios'
import API_URL from '../config'

export const getTeam = async (teamId) => {
  try {
    const team = await axios.get(`${API_URL}/api/teams/${teamId}`)
    return team.data
  }
  catch (error) {
    throw error.response
  }
}

export const getTeams=async()=>{
  try {
    const teams = await axios.get(`${API_URL}/api/teams`)
    return teams.data
  }
  catch (error) {
    throw error.response
  }
}

export const postTeam = async (team) => {
  try {
    const newTeam = await axios.post(`${API_URL}/api/teams/`, team)
    return newTeam.data
  }
  catch (error) {
    throw error.response
  }
}