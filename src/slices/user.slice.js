import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:
    JSON.parse(sessionStorage.getItem("employees")) !== null
      ? [...JSON.parse(sessionStorage.getItem("employees"))]
      : [],
  reducers: {
    addUser: (state, action) => {
      // const newUser = {
      //   user: action.payload,
      // };
      state.push(action.payload);
      sessionStorage.setItem("employees", JSON.stringify(state));
    },
  },
});

export const { addUser } = userSlice.actions;
