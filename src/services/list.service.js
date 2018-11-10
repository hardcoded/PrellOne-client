import axios from 'axios'
import API_URL from '../config'

export const getList = async (listId) => {
  try {
    const list = await axios.get(`${API_URL}/api/lists/${listId}`)
    return list.data
  }
  catch (error) {
    throw error.response
  }
}

export const postList = async (list) => {
  try {
    const newList = await axios.post(`${API_URL}/api/lists/`, list)
    return newList.data
  }
  catch (error) {
    throw error.response
  }
}