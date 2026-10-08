import { ApiResponse } from "@/response/ApiResponse";
import { SkillProps } from "./skillTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getSkillAPI, getSkillAPIById, getSkillAPIUserById, getSkillUserAPI } from "./skillAPI";
import {
  getSkillFailure,
  getSkillIdFailure,
  getSkillIdRequest,
  getSkillIdSuccess,
  getSkillRequest,
  getSkillSuccess,
  getSkillUserFailure,
  getSkillUserIdFailure,
  getSkillUserIdRequest,
  getSkillUserIdSuccess,
  getSkillUserRequest,
  getSkillUserSuccess,
} from "./skillSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* getSkillFunction() {
  try {
    const response: ApiResponse<SkillProps> = yield call(getSkillAPI);
    yield put(getSkillSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Skill Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getSkillFailure(message));
  }
}
function* getSkillIdFunction(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<SkillProps> = yield call(getSkillAPIById, action.payload);
    yield put(getSkillIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Skill Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getSkillIdFailure(message));
  }
}
function* getSkillUserFunction() {
  try {
    const response: ApiResponse<SkillProps[]> = yield call(getSkillUserAPI);
    yield put(getSkillUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Skill Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getSkillUserFailure(message));
  }
}
function* getSkillUserIdFunction(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<SkillProps> = yield call(getSkillAPIUserById, action.payload);
    yield put(getSkillUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Skill Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getSkillUserIdFailure(message));
  }
}
export default function* skillSaga() {
  yield takeLatest(getSkillRequest.type, getSkillFunction);
  yield takeLatest(getSkillUserRequest.type, getSkillUserFunction);
  yield takeLatest(getSkillIdRequest.type, getSkillIdFunction);
  yield takeLatest(getSkillUserIdRequest.type, getSkillUserIdFunction);
}
