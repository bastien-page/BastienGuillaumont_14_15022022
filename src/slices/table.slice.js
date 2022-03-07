import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: { length: 10, filter: null, indexStart: 0, indexEnd: 10 },
  reducers: {
    changeLength: (state, action) => {
      state.length = action.payload;
      state.indexEnd = action.payload;
    },
    filterTable: (state, action) => {
      state.filter = action.payload;
    },
    next: (state) => {
      state.indexStart = state.indexStart + state.length;
      state.indexEnd = state.indexEnd + state.length;
    },
    previous: (state) => {
      state.indexStart = state.indexStart - state.length;
      state.indexEnd = state.indexEnd - state.length;
    },
  },
});

export const { changeLength, filterTable, previous, next } = tableSlice.actions;
