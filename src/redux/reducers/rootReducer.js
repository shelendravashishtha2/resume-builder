import { combineReducers } from "redux";
import templateReducer from "./templateReducer";
import userReducer from "./userReducer";
import detailReducer from "./detailReducer";
import { saveReducer } from "./saveReducer";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  detail: detailReducer,
  saveState : saveReducer
});

export default rootReducer;
