import axios from 'axios'
import API_URL from '../config'
import { getToken } from './auth.service'

export const getCard = async (cardId) => {
  const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
  try {
    const card = await axios.get(`${API_URL}/api/cards/${cardId}`)
    return card.data
  }
  catch (error) {
    throw error.response
  }
}

export const postCard = async (card) => {
  const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
  try {
    const newCard = await axios.post(`${API_URL}/api/cards/`, card)
    return newCard.data
  }
  catch (error) {
    throw error.response
  }
}