export const uploadSuccess = ({ data }) => {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export const uploadFail = (error) => {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}