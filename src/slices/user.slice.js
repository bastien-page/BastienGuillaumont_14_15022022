import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        user: action.payload,
      };
      state.push(newUser);
    },
  },
});

export const { addUser } = userSlice.actions;
