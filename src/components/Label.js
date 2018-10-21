import React from 'react';
import { Badge } from 'reactstrap';

const Label = (title, color) => <Badge className="mr-1" color={color} style={{minWidth:'5px'}}>{title}</Badge>

export default Label