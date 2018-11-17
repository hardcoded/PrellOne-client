import React from 'react';
import { Badge, Input} from 'reactstrap';
import PropTypes from  'prop-types';

const Label = ({id, title, color, editable, editTitle, toggleEditTitle, updateLabel, size}) => (
  <div>
  {
    !editable && <Badge className="mr-1" fontSize={size} color={color} style={{minWidth:'5px'}}>{title}</Badge>  
  }
  {
    (!editTitle && editable) && <Badge className="mr-1" fontSize={size} color={color} style={{minWidth:'5px'}} onClick={() => toggleEditTitle()}>{title}</Badge>
  }
  {
    (editTitle && editable) && <Input 
                        onBlur={() => toggleEditTitle()} 
                        onChange={(e) => updateLabel({id, title: e.target.value})} 
                        value={title}></Input>
  }
</div>
)

Label.propTypes={
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  editTitle: PropTypes.bool,
  toggleEditTitle: PropTypes.func.isRequired,
  updateLabel: PropTypes.func.isRequired,
  size: PropTypes.number
  
}
export default Label