import axios from 'axios'
import API_URL from '../config'

export const getLabels = () => {
  return dispatch => {
      axios.get(`${API_URL}/api/labels`) 
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
