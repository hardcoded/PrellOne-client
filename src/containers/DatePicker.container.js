import React, { Component } from "react"
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import moment from "moment"
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class DatePickerContainer extends Component {
 
  render() {
    return (
      <DatePicker
        selected={this.props.selected}
        onBlur={() => {console.log("Ya"); this.props.handleOnBlur()}}
        onChange={this.props.handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="LLL"
        timeCaption="time"
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selected: moment(ownProps.card.dueDate)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: (date)  => ownProps.updateCard({...ownProps.card, dueDate: date}),
  handleOnBlur: ownProps.closeEdit
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerContainer)