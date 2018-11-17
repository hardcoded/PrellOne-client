import axios from 'axios'
import API_URL from '../config'

export const getLabels = () => {
  return dispatch => {
      axios.get('http://localhost:8080/api/labels') 
          .then(function (response) { 
              // handle succes 
              console.log(response);
              return  dispatch({
                  type: 'LABELS_LOADED',
                  labels: response.data
              }) 
          }) 
          .catch(function (error) { 
              // handle error 
              console.log(error); 
              return dispatch({
                  type: 'LABELS_LOAD_FAILED',
                  labels: []
              })
          })
  }
}

export const updateLabel= async (label) => {
    try {
      const newLabel = await axios.put(`${API_URL}/api/labels/`, label)
      return newLabel.data
    }
    catch (error) {
      throw error.response
    }
   
  }