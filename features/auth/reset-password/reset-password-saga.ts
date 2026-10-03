import { PayloadAction } from "@reduxjs/toolkit";
import { ResetPasswordProps } from "./reset-password-types";
import { ApiResponse } from "@/response/ApiResponse";
import { call, put, takeLatest } from "redux-saga/effects";
import { ResetPasswordAPI } from "./reset-password-api";
import {
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "./reset-password-slice";
import { AxiosError } from "axios";

function* handleGetResetPassword(action: PayloadAction<ResetPasswordProps>): Generator {
  console.log("1. RESET PASSWORD SAGA START", action.payload);

  const { resetToken, newPassword, confirmPassword } = action.payload;

  try {
    console.log("2. CALL RESET PASSWORD API");

    const response: ApiResponse<null> = yield call(ResetPasswordAPI, {
      resetToken,
      newPassword,
      confirmPassword,
    });

    console.log("3. RESET PASSWORD RESPONSE:", response);

    yield put(resetPasswordSuccess(response.message));

    console.log("4. RESET PASSWORD SUCCESS");
  } catch (error) {
    console.error("RESET PASSWORD ERROR:", error);

    const errors = error as AxiosError<ApiResponse<string>>;

    let message = "Reset Password Failure";

    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }

    yield put(resetPasswordFailure(message));
  }
}
export default function* ResetPasswordSaga() {
  yield takeLatest(resetPasswordRequest.type, handleGetResetPassword);
}
