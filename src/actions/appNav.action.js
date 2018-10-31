export const open = () => ({
    type: 'OPEN',
    payload: true,
})

export const close = () => ({
    type: 'CLOSE',
    payload: false
})