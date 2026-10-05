import { ApiResponse } from "@/response/ApiResponse";
import { ProjectProps } from "./projectTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getProjectAPI,
  getProjectByIdAPI,
  getProjectUserAPI,
  getProjectUserByIdAPI,
} from "./projectAPI";
import {
  getProjectFailure,
  getProjectIdFailure,
  getProjectIdRequest,
  getProjectIdSuccess,
  getProjectRequest,
  getProjectSuccess,
  getProjectUserFailure,
  getProjectUserIdFailure,
  getProjectUserIdRequest,
  getProjectUserIdSuccess,
  getProjectUserRequest,
  getProjectUserSuccess,
} from "./projectSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

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
function* handleGetProjectId(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<ProjectProps> = yield call(getProjectByIdAPI, action.payload);
    yield put(getProjectIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getProjectIdFailure(message));
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
function* handleGetUserProjectId(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<ProjectProps> = yield call(getProjectUserByIdAPI, action.payload);
    yield put(getProjectUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getProjectUserIdFailure(message));
  }
}
export default function* projectSaga() {
  yield takeLatest(getProjectRequest.type, handleGetProject);
  yield takeLatest(getProjectUserRequest.type, handleGetUserProject);
  yield takeLatest(getProjectIdRequest.type, handleGetProjectId);
  yield takeLatest(getProjectUserIdRequest.type, handleGetUserProjectId);
}
