import React from 'react';
import PropTypes from  'prop-types'

const AddList = ({boardId, addList})=> {
  let input
  

  return (
    <div>
    <form onSubmit={e => {e.preventDefault()
      console.log("BON", input.value)
      addList(boardId, input.value)
      input.value = ''
    }}>
    <input placeholder="Title"  ref={node => input = node} />
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}

AddList.propTypes={
  boardId: PropTypes.string.isRequired,
  addList: PropTypes.func.isRequired
}

export default AddList