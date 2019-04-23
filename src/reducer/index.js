import { combineReducers } from "redux";
import reminder from "./reminder";
import todo from "./todo";

export default combineReducers({
  reminder: reminder,
  todos: todo
});
