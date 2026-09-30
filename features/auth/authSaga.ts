import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import { BaseResponse } from "@/config/fetchBaseResponse";

import { RegisterProps } from "./authTypes";
import { RegisterAPI } from "./authAPI";

import {
  createRegisterFailure,
  createRegisterRequest,
  createRegisterSuccess
} from "./authSlice";

function* handleCreateRegister(
  action: PayloadAction<RegisterProps>
): Generator {
  try {
    const { email, username, password } = action.payload;

    const response: BaseResponse<null> = yield call(RegisterAPI, {
      email,
      username,
      password
    });

    yield put(createRegisterSuccess(response.data));
  } catch (error: unknown) {
    let message = "Đăng ký thất bại. Vui lòng thử lại.";

    if (error instanceof Error) {
      message = error.message;
    }

    yield put(createRegisterFailure(message));
  }
}

export default function* AuthSaga() {
  yield takeLatest(createRegisterRequest.type, handleCreateRegister);
}
