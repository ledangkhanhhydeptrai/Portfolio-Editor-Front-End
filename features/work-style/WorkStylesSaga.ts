import { ApiResponse } from "@/response/ApiResponse";
import { WorkStyleProps } from "./WorkStylesTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllStyles,
  getAllStylesByUser,
  getStylesPublicById,
  getStylesUserById,
} from "./WorkStylesAPI";
import {
  getWorkStyleByIdFailure,
  getWorkStyleByIdRequest,
  getWorkStyleByIdSuccess,
  getWorkStyleByUserIdFailure,
  getWorkStyleByUserIdRequest,
  getWorkStyleByUserIdSuccess,
  getWorkStylesFailure,
  getWorkStylesRequest,
  getWorkStylesSuccess,
  getWorkStylesUserFailure,
  getWorkStylesUserRequest,
  getWorkStylesUserSuccess,
} from "./WorkStylesSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetAllWorkStyles() {
  try {
    const response: ApiResponse<WorkStyleProps> = yield call(getAllStyles);
    yield put(getWorkStylesSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get All Work Styles Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getWorkStylesFailure(message));
  }
}
function* handleGetWorkStylesById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<WorkStyleProps> = yield call(getStylesPublicById, action.payload);
    yield put(getWorkStyleByIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Work Styles Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getWorkStyleByIdFailure(message));
  }
}
function* handleGetAllWorkStylesByUser() {
  try {
    const response: ApiResponse<WorkStyleProps[]> = yield call(getAllStylesByUser);
    yield put(getWorkStylesUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get All Work Styles By User Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getWorkStylesUserFailure(message));
  }
}
function* handleGetWorkStylesByUserId(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<WorkStyleProps> = yield call(getStylesUserById, action.payload);
    yield put(getWorkStyleByUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Work Styles Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getWorkStyleByUserIdFailure(message));
  }
}
export default function* WorkStyleSaga() {
  yield takeLatest(getWorkStylesRequest.type, handleGetAllWorkStyles);
  yield takeLatest(getWorkStyleByIdRequest.type, handleGetWorkStylesById);
  yield takeLatest(getWorkStylesUserRequest.type, handleGetAllWorkStylesByUser);
  yield takeLatest(getWorkStyleByUserIdRequest.type, handleGetWorkStylesByUserId);
}
