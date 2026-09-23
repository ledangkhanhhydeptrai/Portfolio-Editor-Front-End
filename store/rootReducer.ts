import { combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profileSlice";
import SkillReducer from "../features/skill/skillSlice";
import ProjectReducer from "../features/project/projectSlice";
const rootReducer = combineReducers({
  profile: ProfileReducer,
  skill: SkillReducer,
  project: ProjectReducer
});
export default rootReducer;
