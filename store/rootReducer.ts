import { combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profileSlice";
import SkillReducer from "../features/skill/skillSlice";
import ProjectReducer from "../features/project/projectSlice";
import ExperienceReducer from "../features/experience/experienceSlice";
import EducationReducer from "../features/education/educationSlice";
import SocialLinkReducer from "../features/social-link/socialLinkSlice";
import AuthReducer from "../features/auth/authSlice";
import VideoReducer from "../features/video/videoSlice";
import ChangePasswordReducer from "../features/auth/change-password/ChangePasswordSlice";
import ChangePasswordOTPReducer from "../features/auth/change-password-otp/ChangePasswordOTPSlice";
import ResetPasswordOTPReducer from "../features/auth/reset-password/reset-password-slice";
import CurriculumVitaeReducer from "../features/CurriculumVitae/CurriculumVitaeSlice";
import WorkStyleReducer from "../features/work-style/WorkStylesSlice";
const rootReducer = combineReducers({
  profile: ProfileReducer,
  skill: SkillReducer,
  project: ProjectReducer,
  experience: ExperienceReducer,
  education: EducationReducer,
  socialLink: SocialLinkReducer,
  auth: AuthReducer,
  video: VideoReducer,
  changePassword: ChangePasswordReducer,
  changePasswordOTP: ChangePasswordOTPReducer,
  resetPasswordOTP: ResetPasswordOTPReducer,
  curriculumVitae: CurriculumVitaeReducer,
  workstyle: WorkStyleReducer,
});
export default rootReducer;
