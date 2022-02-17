import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createEmployeeReducer from "./reducers/createEmployee.reducer";

const store = createStore(
  createEmployeeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
