import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class Label extends Component {
  render() {
    return <Badge className="mr-1" color={this.props.label.color} style={{minWidth:'5px'}}>{this.props.label.title}</Badge>
  }
}
export default Label