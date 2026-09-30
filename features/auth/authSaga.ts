import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterProps } from "./authTypes";
import { ApiResponse } from "@/response/ApiResponse";
import { call, put, takeLatest } from "redux-saga/effects";
import { RegisterAPI } from "./authAPI";
import {
  createRegisterFailure,
  createRegisterRequest,
  createRegisterSuccess
} from "./authSlice";
import { AxiosError } from "axios";

function* handleCreateRegister(
  action: PayloadAction<RegisterProps>
): Generator {
  const { email, username, password } = action.payload;
  try {
    const response: ApiResponse<null> = yield call(RegisterAPI, {
      email,
      password,
      username
    });
    yield put(createRegisterSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Registration Failed";
    if (
      errors.response &&
      errors.response.data &&
      errors.response.data.message
    ) {
      message = errors.response.data.message;
    }
    yield put(createRegisterFailure(message));
  }
}
export default function* AuthSaga() {
  yield takeLatest(createRegisterRequest.type, handleCreateRegister);
}
