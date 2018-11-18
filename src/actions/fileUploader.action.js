/**
 * 
 * @param {*} {data} the data of the file
 * @return {action} UPLOAD_DOCUMENT_SUCCESS action and the payload with the data
 */
export const uploadSuccess = ({ data }) => {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

/**
 * 
 * @param {*} error the data of the file
 * @return {action} UPLOAD_DOCUMENT_FAILED action and the payload with the error
 */
export const uploadFail = (error) => {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}