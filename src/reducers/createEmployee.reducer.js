import { ADD_USER } from "../actions/createEmployee.action";

let id = 0;

const initialState = [];

const createEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { id: ++id, user: { ...action.payload } }];
    default:
      return state;
  }
};

export default createEmployeeReducer;
