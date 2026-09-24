import { combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profileSlice";
import SkillReducer from "../features/skill/skillSlice";
import ProjectReducer from "../features/project/projectSlice";
import ExperienceReducer from "../features/experience/experienceSlice";
const rootReducer = combineReducers({
  profile: ProfileReducer,
  skill: SkillReducer,
  project: ProjectReducer,
  experience: ExperienceReducer,
});
export default rootReducer;
