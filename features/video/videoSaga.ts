import { ApiResponse } from "@/response/ApiResponse";
import { VideoProject } from "./videoTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getVideoAPI, getVideoUserAPI } from "./videoAPI";
import {
  getVideoFailure,
  getVideoRequest,
  getVideoSuccess,
  getVideoUserFailure,
  getVideoUserRequest,
  getVideoUserSuccess,
} from "./videoSlice";
import { AxiosError } from "axios";

function* handleGetVideoProject() {
  try {
    const response: ApiResponse<VideoProject[]> = yield call(getVideoAPI);
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
export default function* videoSaga() {
  yield takeLatest(getVideoRequest.type, handleGetVideoProject);
  yield takeLatest(getVideoUserRequest.type, handleGetVideoProjectUser);
}
