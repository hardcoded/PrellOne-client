import axios from 'axios'
import API_URL from '../config'
import { getToken } from './auth.service'

export const getBoard = async (boardId) => {
    const headers = { headers: { 'Authorization': `Bearer ${getToken()}` } }
    try {
        const board = await axios.get(`${API_URL}/api/boards/${boardId}`, headers)
        return board.data
    }
    catch (error) {
        throw error.response
    }
}

export const postBoard = async (board) => {
    const headers = { headers: { 'Authorization': `Bearer ${getToken()}` } }
    try {
        const newBoard = await axios.post(`${API_URL}/api/boards/`, board, headers)
        return newBoard.data
    }
    catch (error) {
        throw error.response
    }
}
