import { combineReducers } from "redux";
import { countReducer } from "./count";

export default combineReducers({
  counter : countReducer
});