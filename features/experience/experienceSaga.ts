import { ApiResponse } from "@/response/ApiResponse";
import { ExperienceProps } from "./experienceTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  ExperienceAPI,
  ExperienceAPIById,
  ExperienceAPIByUserId,
  ExperienceUserAPI,
} from "./experienceAPI";
import {
  getExperienceFailure,
  getExperienceIdFailure,
  getExperienceIdRequest,
  getExperienceIdSuccess,
  getExperienceRequest,
  getExperienceSuccess,
  getExperienceUserFailure,
  getExperienceUserIdFailure,
  getExperienceUserIdRequest,
  getExperienceUserIdSuccess,
  getExperienceUserRequest,
  getExperienceUserSuccess,
} from "./experienceSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetExperience() {
  try {
    const response: ApiResponse<ExperienceProps> = yield call(ExperienceAPI);
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
function* handleGetExperienceId(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<ExperienceProps> = yield call(ExperienceAPIById, action.payload);
    yield put(getExperienceIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Experience Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getExperienceIdFailure(message));
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
function* handleGetExperienceUserId(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<ExperienceProps> = yield call(
      ExperienceAPIByUserId,
      action.payload,
    );
    yield put(getExperienceUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Experience Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getExperienceUserIdFailure(message));
  }
}
export default function* ExperienceSaga() {
  yield takeLatest(getExperienceRequest.type, handleGetExperience);
  yield takeLatest(getExperienceUserRequest.type, handleGetUserExperience);
  yield takeLatest(getExperienceIdRequest.type, handleGetExperienceId);
  yield takeLatest(getExperienceUserIdRequest.type, handleGetExperienceUserId);
}
