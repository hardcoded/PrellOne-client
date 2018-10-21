let nextCardId=0

export const addCard= title=>({
    type:'ADD_CARD',
    id:nextCardId++,
    title
})

export const updateDesc= (desc,id) =>({
    type:'UPDATE_DESC',
    id,
    desc
})

export const addMember=(member,id)=>({
    type: 'ADD_MEMBER',
    id,
    member
})

export const removeMember=(indexMember,id)=>({
    type: 'ADD_MEMBER',
    id,
    indexMember
})

export const addLabel=(label,id)=>({
    type: 'ADD_MEMBER',
    id,
    label
})
export const removeLabel=(indexLabel,id)=>({
    type: 'ADD_MEMBER',
    id,
    indexLabel
})

export const changeToggle=id=>({
    type:'TOGGLE_CARD',
    id
})
