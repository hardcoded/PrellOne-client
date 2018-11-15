import React from 'react';
import PropTypes from  'prop-types'

const Member = ({id, userName, photo, size}) => (
  <img src={photo} alt={userName} className={"rounded-circle"} width={size} height={size}/>
)

Member.propTypes={
  id: PropTypes.string.isRequired,
  username: PropTypes.string,
  photo: PropTypes.string,
}
export default Member