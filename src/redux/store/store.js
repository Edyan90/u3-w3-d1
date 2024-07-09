import { combineReducers, configureStore } from "@reduxjs/toolkit";

import fetchReducer from "../reducers/fetchReducer";
import favourites from "../reducers/favourites";

const rootReducer = combineReducers({
  favourites: favourites,
  fetchjob: fetchReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
