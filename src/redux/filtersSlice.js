import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;

//!Selectors

export const selectNameFilter = (state) => {
  return state.filters.name;
};
