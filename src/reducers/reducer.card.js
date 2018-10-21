const reducerCard=(state,action)=>{
    switch(action.type){
        case 'ADD_CARD':
            return {
                id:action.id,
                title:action.title,
                desc:"",
                members:[],
                labels:[],
                toogle:false
            }

        case 'ADD_MEMBERS':
            if(state.id!=action.id){
                return state;
            }
            else{
                return {
                    ...state,
                    members:[...members,action.member]
                };
            }

        case 'UPDATE_DESC':
            if(state.id!=action.id){
                return state
            }
            else{
                return {
                    ...state,
                    desc:action.desc
                };
            }

        case 'REMOVE_MEMBER':
            if(state.id!=action.id){
                return state;
            }
            else{
                return {
                    ...state,
                    members:[...members.slice(0,action.index),...members.slice(index+1)]
                }
            }

        case 'ADD_LABEL':
            if(state.id!=action.id){
                return state
            }
            else{
                return {
                    ...state,
                   labels:[...members.slice(0,action.index),action.label]
                }
            }
        case 'REMOVE_LABEL':
            if(state.id!=action.id){
                return state
            }
            else{
                return {
                    ...state,
                    labels:[...labels.slice(0,action.index),...labels.slice(index+1)]
                }
            }
        case 'TOGGLE_CARD':
            if(state.id!=action.id){
                return state;
            }
            else{
                return {
                    ...state,
                    toggle:!state.toggle
                }
            }
        default: 
            return state
    }
}