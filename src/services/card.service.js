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

export const updateCard = async (card) => {
  try {
    const newCard = await axios.put(`${API_URL}/api/cards/`, card)
    return newCard.data
  }
  catch (error) {
    throw error.response
  }
}

export const listGoogleFiles = async () => {
  try {
    const filesList = await axios.get(`${API_URL}/api/cards/googleFiles`)
    return filesList.data
  }
  catch (error) {
    throw error.response
  }
}

export const uploadDocumentRequest = async (file, cardId) => {
 
  var data = new FormData();
  data.append('file', file);
  data.append('cardId', cardId);
  console.log("Sending file to server")
  console.log(data)
  try {
    const uploadResult = await axios.post(`${API_URL}/api/cards/attachFile`, data)
    return uploadResult.data
  }
  catch (error) {
    throw error
  }
}

export const downloadDocument = async (fileName) => {
  console.log("Asing to download")
  console.log(fileName)
  try {
    const file = await axios.get(`${API_URL}/api/cards/file/${fileName}`)
    axios({
      url: `${API_URL}/api/cards/file/${fileName}`,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', fileName); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
    return file
  }
  catch(error) {
    throw error
  }
}

export const googleConfig = {
  clientId: '338898842430-1hb82kvj2u8c7ko1camthf4tl0fc2fg6.apps.googleusercontent.com',
  developerKey: 'AIzaSyAZL_CRqCzhOL7gou7UAVAvIjCVbZaSgZY' 
}