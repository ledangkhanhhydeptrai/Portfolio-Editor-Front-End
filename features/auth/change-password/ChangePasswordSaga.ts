import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";

import { ChangePasswordUpdateProps } from "./ChangePasswordTypes";
import { ApiResponse } from "@/response/ApiResponse";

import { ChangePasswordUpdateAPI } from "./ChangePasswordAPI";

import {
  changePasswordFailure,
  changePasswordRequest,
  changePasswordSuccess,
} from "./ChangePasswordSlice";

function* handleChangePassword(action: PayloadAction<ChangePasswordUpdateProps>): Generator {
  const { email, newPassword, confirmPassword } = action.payload;

  try {
    const response: ApiResponse<null> = yield call(ChangePasswordUpdateAPI, {
      email,
      newPassword,
      confirmPassword,
    });

    const message = response.message || "Đổi mật khẩu thành công";

    yield put(changePasswordSuccess(message));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;

    let message = "Đổi mật khẩu thất bại";

    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }

    yield put(changePasswordFailure(message));
  }
}

export default function* ChangePasswordSaga() {
  yield takeLatest(changePasswordRequest.type, handleChangePassword);
}
