const initialState = {
    publications: [],
    utilisateurs: [],
    likes: [],
    taches: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'updateTodo':
            return Object.assign({}, state, {
                taches: state.taches.concat(action.payload)
            })
        case 'removeTodo':
            break;
        default :
            return state;
    }

}

export default rootReducer