import { combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profileSlice";
import SkillReducer from "../features/skill/skillSlice";
const rootReducer = combineReducers({
  profile: ProfileReducer,
  skill: SkillReducer
});
export default rootReducer;
