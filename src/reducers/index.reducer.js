import { combineReducers } from "redux";
import loginReducer from "./login.reducer";

const indexReducer = combineReducers({
    login: loginReducer
});
export default indexReducer;