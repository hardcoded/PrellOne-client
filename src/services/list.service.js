import axios from 'axios'
import API_URL from '../config'

/**
 * get all the data of a list 
 * @param {string} listId id of the list 
 * @return {*} list data
 */
export const getList = async (listId) => {
  try {
    const list = await axios.get(`${API_URL}/api/lists/${listId}`)
    return list.data
  }
  catch (error) {
    throw error.response
  }
}

/**
 * create a new list 
 * @param {List} list the new list to post
 * @return {*} new list data 
 */
export const postList = async (list) => {
  try {
    const newList = await axios.post(`${API_URL}/api/lists/`, list)
    return newList.data
  }
  catch (error) {
    throw error.response
  }
}

/**
 * update a list 
 * @param {List} list the updated list 
 * @return {*} updated list data 
 */
export const updateList = async (list) => {
  try {
    const newList = await axios.put(`${API_URL}/api/lists/`, list)
    return newList.data
  }
  catch (error) {
    throw error.response
  }
 
}

/**
 * update the title of the list 
 * @param {List} list the updated list 
 * @return {*} updated list data 
 */
export const updateListTitle = async (list) => {
  try {
    const newList = await axios.put(`${API_URL}/api/lists/title`, list)
    return newList.data
  }
  catch (error) {
    throw error.response
  }
 
}