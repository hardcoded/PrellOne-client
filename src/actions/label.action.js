/**
 * 
 * @param {string} id id of the label
 * @return {action} TOGGLE_EDIT_TITLE_LABEL and the payload with the id of the label
 */
export const toggleEditTitleLabel = (id) => ({
    type: 'TOGGLE_EDIT_TITLE_LABEL',
    id,
})

/**
 * 
 * @param {Label} label id of the label
 * @return {action} TITLE_LABEL_UPDATED and the payload with the label
 */
export const labelUpdatedTitle = (label) => ({
    type: 'TITLE_LABEL_UPDATED',
    label
})