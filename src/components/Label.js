import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from  'prop-types';

const Label = ({id, title, color}) => (
  <Badge className="mr-1" color={color} style={{minWidth:'5px'}}>
    {title}
  </Badge>
)

Label.propTypes={
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
  
}
export default Label