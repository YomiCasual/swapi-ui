import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import GlobalReducer from "./GlobalReducer";

const reducer = combineReducers({
  globalState: GlobalReducer,
});

const middleware = [thunk];
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["swapi/fetchAll/fulfilled"],
      },
    }).concat(middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
