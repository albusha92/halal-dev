import { homeReducer } from "./../features/home-page/slices/homeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { mobileMenuReducer } from "../uikit/menuSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  mobileMenu: mobileMenuReducer,
});

const persistedReducer = persistReducer(
  {
    key: "halal-website",
    storage: storageSession,
    whitelist: ["auth"],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: process.env.NODE_ENV !== "production" ? [thunk, logger] : [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
