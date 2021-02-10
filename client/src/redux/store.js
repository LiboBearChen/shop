import { createStore } from "redux";
import contactDataReducer from "./reducers";

export default createStore(contactDataReducer);
/////////////////////////////////////////////////////////
import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
