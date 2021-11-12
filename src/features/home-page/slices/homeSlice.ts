import { createSlice } from "@reduxjs/toolkit";
import { HomeState } from "../../../schema/redux";

const initState: HomeState = {
	language: 'de',
}

const homeSlice = createSlice({
	initialState: initState,
	name: 'home',
	reducers: {
		update_language: (state, {payload}) => {
			state.language = payload;
		}
	}
});

export const homeReducer = homeSlice.reducer;
export const {update_language} = homeSlice.actions;