import { ApiResponse } from "@/response/ApiResponse";
import { SkillProps } from "./skillTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getSkillAPI } from "./skillAPI";
import {
  getSkillFailure,
  getSkillRequest,
  getSkillSuccess
} from "./skillSlice";
import { AxiosError } from "axios";

function* getSkillFunction() {
  try {
    const response: ApiResponse<SkillProps[]> = yield call(getSkillAPI);
    yield put(getSkillSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Skill Failure";
    if (
      errors.response &&
      errors.response.data &&
      errors.response.data.message
    ) {
      message = errors.response.data.message;
    }
    yield put(getSkillFailure(message));
  }
}
export default function* skillSaga() {
  yield takeLatest(getSkillRequest.type, getSkillFunction);
}
