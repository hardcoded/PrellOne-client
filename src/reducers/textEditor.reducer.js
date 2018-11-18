import RichTextEditor from 'react-rte';
/**
 * Function to handle textEditor action to modify store
 * @param {*} state 
 * @param {*} action 
 */
const textEditor = (state = {}, action) => {
    switch (action.type) {

      case 'EDIT_CARD_DESCRIPTION' :
        return {
            ...state,
            value: action.value
        }
      case 'OPEN_EDIT_CARD_DESCRIPTION' :
        return {
            ...state,
            value: RichTextEditor.createValueFromString(action.description, 'html')
        }
      default: return state;
    }
}

export default textEditor