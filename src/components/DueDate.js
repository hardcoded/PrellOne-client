import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from  'prop-types';
import moment from 'moment';

const DueDate = ({date, done})=>{
  const now = moment()
  console.log(now.format());
  
  const dueDate = moment(date)
  const diff = dueDate.diff(now, 'days')
  var color = 'success'
  if (!done){
    if (diff <= 3) {
      color = 'warning'
    } 
    if (diff <= 1) {
      color = 'danger'
    }
  }
  return(
  <Badge color={color}>{dueDate.format("dddd, MMMM Do YYYY, h:mm a")}</Badge>
  )}

DueDate.propTypes={
  date: PropTypes.string,
  done: PropTypes.bool
}
export default DueDate