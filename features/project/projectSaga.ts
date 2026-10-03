import { ApiResponse } from "@/response/ApiResponse";
import { ProjectProps } from "./projectTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getProjectAPI, getProjectUserAPI } from "./projectAPI";
import {
  getProjectFailure,
  getProjectRequest,
  getProjectSuccess,
  getProjectUserFailure,
  getProjectUserRequest,
  getProjectUserSuccess,
} from "./projectSlice";
import { AxiosError } from "axios";

function* handleGetProject() {
  try {
    const response: ApiResponse<ProjectProps[]> = yield call(getProjectAPI);
    yield put(getProjectSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getProjectFailure(message));
  }
}
function* handleGetUserProject() {
  try {
    const response: ApiResponse<ProjectProps[]> = yield call(getProjectUserAPI);
    yield put(getProjectUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getProjectUserFailure(message));
  }
}
export default function* projectSaga() {
  yield takeLatest(getProjectRequest.type, handleGetProject);
  yield takeLatest(getProjectUserRequest.type, handleGetUserProject);
}
