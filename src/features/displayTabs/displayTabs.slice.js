import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const displayTabs = createSlice({
  name: "currentTab",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default displayTabs.reducer;

export const { changeTab } = displayTabs.actions;
