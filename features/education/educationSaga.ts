import { ApiResponse } from "@/response/ApiResponse";
import { EducationProps } from "./educationTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAllEducation, getUserEducation } from "./educationAPI";
import {
  getEducationFailure,
  getEducationRequest,
  getEducationSuccess,
  getEducationUserFailure,
  getEducationUserRequest,
  getEducationUserSuccess,
} from "./educationSlice";
import { AxiosError } from "axios";

function* handleGetEducation() {
  try {
    const response: ApiResponse<EducationProps[]> = yield call(getAllEducation);
    yield put(getEducationSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Education Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    getEducationFailure(message);
  }
}
function* handleGetUserEducation() {
  try {
    const response: ApiResponse<EducationProps[]> = yield call(getUserEducation);
    yield put(getEducationUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Education Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    getEducationUserFailure(message);
  }
}
export default function* educationSaga() {
  yield takeLatest(getEducationRequest.type, handleGetEducation);
  yield takeLatest(getEducationUserRequest.type, handleGetUserEducation);
}
