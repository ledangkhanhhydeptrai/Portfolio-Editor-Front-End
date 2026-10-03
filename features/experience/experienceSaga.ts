import { ApiResponse } from "@/response/ApiResponse";
import { ExperienceProps } from "./experienceTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { ExperienceAPI, ExperienceUserAPI } from "./experienceAPI";
import {
  getExperienceFailure,
  getExperienceRequest,
  getExperienceSuccess,
  getExperienceUserFailure,
  getExperienceUserRequest,
  getExperienceUserSuccess,
} from "./experienceSlice";
import { AxiosError } from "axios";

function* handleGetExperience() {
  try {
    const response: ApiResponse<ExperienceProps[]> = yield call(ExperienceAPI);
    yield put(getExperienceSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Experience Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getExperienceFailure(message));
  }
}
function* handleGetUserExperience() {
  try {
    const response: ApiResponse<ExperienceProps[]> = yield call(ExperienceUserAPI);
    yield put(getExperienceUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Experience Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getExperienceUserFailure(message));
  }
}
export default function* ExperienceSaga() {
  yield takeLatest(getExperienceRequest.type, handleGetExperience);
  yield takeLatest(getExperienceUserRequest.type, handleGetUserExperience);
}
