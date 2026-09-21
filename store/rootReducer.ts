import { combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profileSlice";
const rootReducer = combineReducers({
  profile: ProfileReducer
});
export default rootReducer;
