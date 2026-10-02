import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import { BaseResponse } from "@/config/fetchBaseResponse";

import { ApiResponse } from "@/response/ApiResponse";

import { LoginProps, LoginResponse, RegisterProps } from "./authTypes";

import { LoginAPI, LogoutAPI, RegisterAPI } from "./authAPI";

import {
  createLoginFailure,
  createLoginRequest,
  createLoginSuccess,
  createLogoutFailure,
  createLogoutRequest,
  createLogoutSuccess,
  createRegisterFailure,
  createRegisterRequest,
  createRegisterSuccess,
  restoreAuthFailure,
  restoreAuthRequest,
  restoreAuthSuccess,
} from "./authSlice";
import { ProfileProps } from "../profile/profileTypes";
import { getProfileByUser } from "../profile/profileAPI";

// =========================================================
// REGISTER
// =========================================================

function* handleCreateRegister(action: PayloadAction<RegisterProps>): Generator {
  try {
    const { email, username, password } = action.payload;

    const response: BaseResponse<null> = yield call(RegisterAPI, {
      email,
      username,
      password,
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

// =========================================================
// LOGIN
// =========================================================

function* handleCreateLogin(action: PayloadAction<LoginProps>): Generator {
  const { email, password } = action.payload;

  try {
    const response: ApiResponse<LoginResponse> = yield call(LoginAPI, {
      email,
      password,
    });

    /*
     * Không lưu localStorage.
     *
     * Backend đã quản lý access_token
     * bằng HttpOnly cookie.
     */

    yield put(createLoginSuccess(response.data));
  } catch (error: unknown) {
    let message = "Đăng nhập thất bại. Vui lòng thử lại.";

    if (error instanceof Error) {
      message = error.message;
    }

    yield put(createLoginFailure(message));
  }
}

// =========================================================
// LOGOUT
// =========================================================

function* handleLogout(): Generator {
  try {
    const response: BaseResponse<null> = yield call(LogoutAPI);

    if (response.success === false) {
      yield put(createLogoutFailure(response.message));

      return;
    }

    /*
     * Backend đã xóa HttpOnly cookie.
     * Bây giờ mới clear Redux.
     */

    yield put(createLogoutSuccess());
  } catch (error: unknown) {
    let message = "Đăng xuất thất bại. Vui lòng thử lại.";

    if (error instanceof Error) {
      message = error.message;
    }

    yield put(createLogoutFailure(message));
  }
}
function* restoreAuthSaga() {
  try {
    const response: ApiResponse<ProfileProps> = yield call(getProfileByUser);

    yield put(
      restoreAuthSuccess({
        username: response.data.fullName,
        email: response.data.email,
      }),
    );
  } catch {
    yield put(restoreAuthFailure());
  }
}
// =========================================================
// WATCHER
// =========================================================

export default function* AuthSaga() {
  yield takeLatest(createRegisterRequest.type, handleCreateRegister);

  yield takeLatest(createLoginRequest.type, handleCreateLogin);

  yield takeLatest(createLogoutRequest.type, handleLogout);
  yield takeLatest(restoreAuthRequest.type, restoreAuthSaga);
}
