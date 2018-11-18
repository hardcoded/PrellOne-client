import axios from 'axios'
import API_URL from '../config'

export const updateLabel= async (label) => {
    try {
      const newLabel = await axios.put(`${API_URL}/api/labels/`, label)
      return newLabel.data
    }
    catch (error) {
      throw error.response
    }
   
  }
