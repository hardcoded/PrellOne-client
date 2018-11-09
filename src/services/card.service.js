import axios from 'axios'
import API_URL from '../config'

export const getCard = async (cardId) => {
  try {
    const card = await axios.get(`${API_URL}/api/cards/${cardId}`)
    return card.data
  }
  catch (error) {
    throw error.response
  }
}

export const postCard = async (card) => {
  try {
    const newCard = await axios.post(`${API_URL}/api/cards/`, card)
    return newCard.data
  }
  catch (error) {
    throw error.response
  }
}