import { ApiResponse } from "@/response/ApiResponse";
import { DirectionProps } from "./DirectionTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllDirectionAPI,
  getAllDirectionUserAPI,
  getDirectionByIdAPI,
  getDirectionByUserIdAPI,
} from "./DirectionAPI";
import {
  getDirectionFailure,
  getDirectionIdFailure,
  getDirectionIdRequest,
  getDirectionIdSuccess,
  getDirectionRequest,
  getDirectionSuccess,
  getDirectionUserFailure,
  getDirectionUserIdFailure,
  getDirectionUserIdRequest,
  getDirectionUserIdSuccess,
  getDirectionUserRequest,
  getDirectionUserSuccess,
} from "./DirectionSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetAllDirection() {
  try {
    const response: ApiResponse<DirectionProps> = yield call(getAllDirectionAPI);
    yield put(getDirectionSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get All Direction Failure";
    if (errors.response && errors.response.data && errors.response.data.message)
      message = errors.response.data.message;
    yield put(getDirectionFailure(message));
  }
}
function* handleGetDirectionById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<DirectionProps> = yield call(getDirectionByIdAPI, action.payload);
    yield put(getDirectionIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Direction Id Failure";
    if (errors.response && errors.response.data && errors.response.data.message)
      message = errors.response.data.message;
    yield put(getDirectionIdFailure(message));
  }
}
function* handleGetAllUserDirection() {
  try {
    const response: ApiResponse<DirectionProps[]> = yield call(getAllDirectionUserAPI);
    yield put(getDirectionUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get All Direction User Failure";
    if (errors.response && errors.response.data && errors.response.data.message)
      message = errors.response.data.message;
    yield put(getDirectionUserFailure(message));
  }
}
function* handleGetDirectionByUserId(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<DirectionProps> = yield call(
      getDirectionByUserIdAPI,
      action.payload,
    );
    yield put(getDirectionUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Direction Id Failure";
    if (errors.response && errors.response.data && errors.response.data.message)
      message = errors.response.data.message;
    yield put(getDirectionUserIdFailure(message));
  }
}
export default function* DirectionSaga() {
  yield takeLatest(getDirectionRequest.type, handleGetAllDirection);
  yield takeLatest(getDirectionUserRequest.type, handleGetAllUserDirection);
  yield takeLatest(getDirectionIdRequest.type, handleGetDirectionById);
  yield takeLatest(getDirectionUserIdRequest.type, handleGetDirectionByUserId);
}
