import { ApiResponse } from "@/response/ApiResponse";
import { VideoProject } from "./videoTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getVideoAPI, getVideoAPIById, getVideoUserAPI, getVideoUserAPIById } from "./videoAPI";
import {
  getVideoFailure,
  getVideoFailureById,
  getVideoFailureUserById,
  getVideoRequest,
  getVideoRequestById,
  getVideoRequestUserById,
  getVideoSuccess,
  getVideoSuccessById,
  getVideoSuccessUserById,
  getVideoUserFailure,
  getVideoUserRequest,
  getVideoUserSuccess,
} from "./videoSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetVideoProject() {
  try {
    const response: ApiResponse<VideoProject> = yield call(getVideoAPI);
    yield put(getVideoSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Video Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getVideoFailure(message));
  }
}
function* handleGetVideoProjectById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<VideoProject> = yield call(getVideoAPIById, action.payload);
    yield put(getVideoSuccessById(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Video Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getVideoFailureById(message));
  }
}
function* handleGetVideoProjectUser() {
  try {
    const response: ApiResponse<VideoProject[]> = yield call(getVideoUserAPI);
    yield put(getVideoUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Video Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getVideoUserFailure(message));
  }
}
function* handleGetVideoProjectUserById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<VideoProject> = yield call(getVideoUserAPIById, action.payload);
    yield put(getVideoSuccessUserById(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Project Video Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getVideoFailureUserById(message));
  }
}
export default function* videoSaga() {
  yield takeLatest(getVideoRequest.type, handleGetVideoProject);
  yield takeLatest(getVideoUserRequest.type, handleGetVideoProjectUser);
  yield takeLatest(getVideoRequestById.type, handleGetVideoProjectById);
  yield takeLatest(getVideoRequestUserById.type, handleGetVideoProjectUserById);
}
