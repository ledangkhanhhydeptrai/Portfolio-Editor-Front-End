import AuthSaga from "@/features/auth/authSaga";
import ChangePasswordOTPSaga from "@/features/auth/change-password-otp/ChangePasswordOTPSaga";
import ChangePasswordSaga from "@/features/auth/change-password/ChangePasswordSaga";
import ResetPasswordSaga from "@/features/auth/reset-password/reset-password-saga";
import educationSaga from "@/features/education/educationSaga";
import ExperienceSaga from "@/features/experience/experienceSaga";
import profileSaga from "@/features/profile/profileSaga";
import projectSaga from "@/features/project/projectSaga";
import skillSaga from "@/features/skill/skillSaga";
import LinkSaga from "@/features/social-link/socialLinkSaga";
import videoSaga from "@/features/video/videoSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    profileSaga(),
    skillSaga(),
    projectSaga(),
    ExperienceSaga(),
    educationSaga(),
    LinkSaga(),
    AuthSaga(),
    videoSaga(),
    ChangePasswordSaga(),
    ChangePasswordOTPSaga(),
    ResetPasswordSaga()
  ]);
}
