import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getToDoData } from "../actions/ToDo.action";

const ToDoData = (props)=> {
    const dispatch = useDispatch();
    const myData = useSelector(state=> state.todo.toDoData);
    console.log('Todo.js---',myData);
    useEffect(()=> {
        dispatch(getToDoData());
    },[])
    return (
        <div>
            MyToDo Data
        </div>
    )
}

export default ToDoData;