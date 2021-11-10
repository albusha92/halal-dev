import { createSlice } from "@reduxjs/toolkit";
import { MobileMenuState } from "../schema/redux";

const initState: MobileMenuState = {
  show: false,
};

const mobileMenuSlice = createSlice({
  initialState: initState,
  name: "mobile-menu",
  reducers: {
    toggle_menu: (state) => {
      state.show = !state.show;
    },
  },
});

export const mobileMenuReducer = mobileMenuSlice.reducer;

export const { toggle_menu } = mobileMenuSlice.actions;
