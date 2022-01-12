import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import toDoReducer from "./todo.reducer";

const indexReducer = combineReducers({
    login: loginReducer,
    todo: toDoReducer
});
export default indexReducer;