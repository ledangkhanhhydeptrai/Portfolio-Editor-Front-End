import profileSaga from "@/features/profile/profileSaga";
import skillSaga from "@/features/skill/skillSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([profileSaga(), skillSaga()]);
}
