import { combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profileSlice";
import SkillReducer from "../features/skill/skillSlice";
import ProjectReducer from "../features/project/projectSlice";
import ExperienceReducer from "../features/experience/experienceSlice";
import EducationReducer from "../features/education/educationSlice";
import SocialLinkReducer from "../features/social-link/socialLinkSlice";
const rootReducer = combineReducers({
  profile: ProfileReducer,
  skill: SkillReducer,
  project: ProjectReducer,
  experience: ExperienceReducer,
  education: EducationReducer,
  socialLink: SocialLinkReducer
});
export default rootReducer;
