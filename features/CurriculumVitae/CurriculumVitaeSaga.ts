import { ApiResponse } from "@/response/ApiResponse";
import { CurriculumProps } from "./CurriculumVitaeTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllCurriculumAPI,
  getAllCurriculumUserAPI,
  getCurriculumByIdAPI,
  getCurriculumByUserIdAPI,
} from "./CurriculumVitaeAPI";
import {
  getCurriculumFailure,
  getCurriculumIdFailure,
  getCurriculumIdRequest,
  getCurriculumIdSuccess,
  getCurriculumRequest,
  getCurriculumSuccess,
  getCurriculumUserFailure,
  getCurriculumUserIdFailure,
  getCurriculumUserIdRequest,
  getCurriculumUserIdSuccess,
  getCurriculumUserRequest,
  getCurriculumUserSuccess,
} from "./CurriculumVitaeSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetCurriculum() {
  try {
    const response: ApiResponse<CurriculumProps[]> = yield call(getAllCurriculumAPI);
    yield put(getCurriculumSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Curriculum Vitae Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getCurriculumFailure(message));
  }
}
function* handleGetCurriculumById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<CurriculumProps> = yield call(getCurriculumByIdAPI, action.payload);
    yield put(getCurriculumIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Curriculum Vitae Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getCurriculumIdFailure(message));
  }
}
function* handleGetUserCurriculum() {
  try {
    const response: ApiResponse<CurriculumProps[]> = yield call(getAllCurriculumUserAPI);
    yield put(getCurriculumUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Curriculum Vitae Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getCurriculumUserFailure(message));
  }
}
function* handleGetCurriculumByUserId(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<CurriculumProps> = yield call(getCurriculumByUserIdAPI, action.payload);
    yield put(getCurriculumUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Curriculum Vitae Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getCurriculumUserIdFailure(message));
  }
}
export default function* CurriculumSaga() {
  yield takeLatest(getCurriculumRequest.type, handleGetCurriculum);
  yield takeLatest(getCurriculumIdRequest.type, handleGetCurriculumById);
  yield takeLatest(getCurriculumUserRequest.type, handleGetUserCurriculum);
  yield takeLatest(getCurriculumUserIdRequest.type,handleGetCurriculumByUserId);
}
