import React from 'react'
import { Badge } from 'reactstrap'
import PropTypes from  'prop-types'

const Label = ({title, color}) => <Badge className="mr-1" color={color} style={{minWidth:'5px'}}>{title}</Badge>

Label.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }


export default Label