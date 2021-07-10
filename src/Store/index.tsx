import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import GlobalReducer from "./GlobalReducer";

const reducer = combineReducers({
  globalState: GlobalReducer,
});

const middleware = [thunk];
// const store = createStore(reducer, {}, applyMiddleware(...middleware));
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["swapi/fetchAll/fulfilled"],
        // Ignore these field paths in all actions
      },
    }).concat(middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
