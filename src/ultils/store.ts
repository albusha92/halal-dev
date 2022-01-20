import { termReducer } from "./../features/term/slices/termSlice";
import { homeReducer } from "./../features/home-page/slices/homeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { mobileMenuReducer } from "../uikit/menuSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  home: homeReducer,
  mobileMenu: mobileMenuReducer,
  term: termReducer,
});

const persistedReducer = persistReducer(
  {
    key: "halal-website",
    storage: storageSession,
    whitelist: ["auth"],
    version: 1,
  },
  rootReducer
);

const middlewares = [thunk];

process.env.NODE_ENV === "development" && middlewares.push(logger as any);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([...middlewares]),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
