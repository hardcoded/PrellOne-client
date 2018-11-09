import axios from 'axios'
import API_URL from '../config'
import { getToken } from './auth.service'

export const getList = async (listId) => {
  const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
  try {
    const list = await axios.get(`${API_URL}/api/lists/${listId}`, headers)
    return list.data
  }
  catch (error) {
    throw error.response
  }
}

export const postList = async (list) => {
  const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
  try {
    const newList = await axios.post(`${API_URL}/api/lists/`, list, headers)
    return newList.data
  }
  catch (error) {
    throw error.response
  }
}