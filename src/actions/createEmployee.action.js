import { bindActionCreators } from "redux";

export const ADD_USER = "ADD_USER";

export const addUser = (employee) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER,
      payload: employee,
    });
  };
};
