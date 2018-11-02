let userId = 8

export const addMemberTeam = (id, username) => ({
    type: 'ADD_MEMBER_TEAM',
    id, 
    member: {
        id: 'user' + userId++,
        username:username,
        photo: 'https://mediasv6.truffaut.com/Articles/jpg/0019000/19324_001_350.jpg'
    }
})

export const hideAddMember = id => ({
    type: 'HIDE_ADD_MEMBER',
    id
})

export const showAddMember = id => ({
    type: 'SHOW_ADD_MEMBER',
    id
})