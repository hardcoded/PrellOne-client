import axios from 'axios'

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