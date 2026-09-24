import ExperienceSaga from "@/features/experience/experienceSaga";
import profileSaga from "@/features/profile/profileSaga";
import projectSaga from "@/features/project/projectSaga";
import skillSaga from "@/features/skill/skillSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([profileSaga(), skillSaga(), projectSaga(), ExperienceSaga()]);
}
