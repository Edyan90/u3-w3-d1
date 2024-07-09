import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import addRemFav from "../reducers/mainReducer";
import fetchReducer from "../reducers/fetchReducer";
const rootReducer = combineReducers({
  addRemFav: addRemFav,
  fetchjob: fetchReducer,
});
const store = configureStore({
  reducer: mainReducer,
});

export default store;
