const tasksReducer = (state ={tasks: []}, action) => {
    switch (action.type){
        case 'LOAD':
            return { tasks: [...action.payload]}
        default:
            return state;
    }
}

export default tasksReducer;

