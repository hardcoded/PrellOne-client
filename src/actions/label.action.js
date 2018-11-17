export const toggleEditTitleLabel = (id) => ({
    type: 'TOGGLE_EDIT_TITLE_LABEL',
    id,
})

export const labelUpdatedTitle = (label) => ({
    type: 'TITLE_LABEL_UPDATED',
    label
})