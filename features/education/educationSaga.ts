import { ApiResponse } from "@/response/ApiResponse";
import { EducationProps } from "./educationTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllEducation,
  getEducationById,
  getEducationByUserId,
  getUserEducation,
} from "./educationAPI";
import {
  getEducationFailure,
  getEducationIdFailure,
  getEducationIdRequest,
  getEducationIdSuccess,
  getEducationRequest,
  getEducationSuccess,
  getEducationUserFailure,
  getEducationUserIdFailure,
  getEducationUserIdRequest,
  getEducationUserIdSuccess,
  getEducationUserRequest,
  getEducationUserSuccess,
} from "./educationSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

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
function* handleGetEducationById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<EducationProps> = yield call(getEducationById, action.payload);
    yield put(getEducationIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Education Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    getEducationIdFailure(message);
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
function* handleGetEducationByUser_Id(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<EducationProps> = yield call(getEducationByUserId, action.payload);
    yield put(getEducationUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Education Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    getEducationUserIdFailure(message);
  }
}
export default function* educationSaga() {
  yield takeLatest(getEducationRequest.type, handleGetEducation);
  yield takeLatest(getEducationUserRequest.type, handleGetUserEducation);
  yield takeLatest(getEducationIdRequest.type, handleGetEducationById);
  yield takeLatest(getEducationUserIdRequest.type, handleGetEducationByUser_Id);
}
