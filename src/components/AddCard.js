import React from 'react';
import PropTypes from  'prop-types'

const AddCard = ({listId, addCard})=> {
  let input
  

  return (
    <div>
    <form onSubmit={e => {e.preventDefault()
      console.log("BON", input.value)
      addCard(listId, input.value)
      input.value = ''
    }}>
    <input placeholder="Title"  ref={node => input = node} />
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}

AddCard.propTypes={
  listId: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired
}

export default AddCard