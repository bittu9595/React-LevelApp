const initialState = {
    toDoData: []
}
const toDoReducer = (state = initialState,action)=> {

    switch (action.type) {
        case "SAVE_TODO_DATA":
            
            return {
                ...state,
                toDoData: action.payload
            }
    
        default:
            return state;
    }

}
export default toDoReducer;