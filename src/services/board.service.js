import axios from 'axios'
import API_URL from '../config'

/**
 * get a board data
 * @param {string} boardId the id of the board
 * @return {*} all the data from the board with the id board id
 */
export const getBoard = async (boardId) => {
    try {
        const board = await axios.get(`${API_URL}/api/boards/${boardId}`)
        return board.data
    }
    catch (error) {
        throw error.response
    }
}

/**
 * create a new board
 * @param {Board} board new board
 * @return {*} new board data
 */
export const postBoard = async (board) => {
    try {
        const newBoard = await axios.post(`${API_URL}/api/boards/`, board)
        return newBoard.data
    }
    catch (error) {
        throw error.response
    }
}

/**
 * add a member to a board
 * @param {string} boardId id of the board
 * @param {string} username 
 * @return {*} added member data
 */
export const addMemberBoard = async (boardId, username) => {
    try {
      const addedMember = await axios.put(`${API_URL}/api/boards/addMember`, {boardId, username})
      return addedMember.data
    }
    catch (error) {
      throw error.response
    }
  }

/**
 * add a team to a board
 * @param {string} boardId id of the board
 * @param {string} name name of the team
 * @return {*} the team added data
 */
export const addTeamBoard = async (boardId, name) => {
    try {
      const addedTeam = await axios.put(`${API_URL}/api/boards/addTeam`, {boardId, name})
      return addedTeam.data
    }
    catch (error) {
      throw error.response
    }
  }