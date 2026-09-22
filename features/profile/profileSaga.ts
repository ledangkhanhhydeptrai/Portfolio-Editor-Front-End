import { ApiResponse } from "@/response/ApiResponse";
import { ProfileProps } from "./profileTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAllProfileAPI } from "./profileAPI";
import {
  getProfileFailure,
  getProfileRequest,
  getProfileSuccess
} from "./profileSlice";
import { AxiosError } from "axios";

function* getProfileAPI() {
  try {
    const response: ApiResponse<ProfileProps[]> = yield call(getAllProfileAPI);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Profile API gets Failed";
    if (
      errors.response &&
      errors.response.data &&
      errors.response.data.message
    ) {
      message = errors.response.data.message;
    }
    yield put(getProfileFailure(message));
  }
}
export default function* profileSaga() {
  yield takeLatest(getProfileRequest.type, getProfileAPI);
}
