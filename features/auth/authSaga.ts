import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import { BaseResponse } from "@/config/fetchBaseResponse";

import { LoginProps, LoginResponse, RegisterProps } from "./authTypes";
import { LoginAPI, RegisterAPI } from "./authAPI";

import {
  createLoginFailure,
  createLoginRequest,
  createLoginSuccess,
  createRegisterFailure,
  createRegisterRequest,
  createRegisterSuccess
} from "./authSlice";
import { ApiResponse } from "@/response/ApiResponse";

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

    yield put(createRegisterSuccess(response.message));
  } catch (error: unknown) {
    let message = "Đăng ký thất bại. Vui lòng thử lại.";

    if (error instanceof Error) {
      message = error.message;
    }

    yield put(createRegisterFailure(message));
  }
}
function* handleCreateLogin(action: PayloadAction<LoginProps>): Generator {
  const { email, password } = action.payload;
  try {
    const response: ApiResponse<LoginResponse> = yield call(LoginAPI, {
      email,
      password
    });
    yield put(createLoginSuccess(response.data));
  } catch (error) {
    let message = "Đăng nhập thất bại. Vui lòng thử lại.";

    if (error instanceof Error) {
      message = error.message;
    }

    yield put(createLoginFailure(message));
  }
}
export default function* AuthSaga() {
  yield takeLatest(createRegisterRequest.type, handleCreateRegister);
  yield takeLatest(createLoginRequest.type, handleCreateLogin);
}
