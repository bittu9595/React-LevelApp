import axios from "axios"

export const getToDoData = ()=> {
    return (dispatch) => {
        axios.get('http://localhost:5000/ToDoData').then((res => {
        dispatch(dispatchToDoData(res.data))
        }))
    }
}

const dispatchToDoData = (data)=> {
    return {
        type: 'SAVE_TODO_DATA',
        payload: data
    }
}

