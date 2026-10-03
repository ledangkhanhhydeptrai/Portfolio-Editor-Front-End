import { PayloadAction } from "@reduxjs/toolkit";
import {
  ChangePasswordForgotPasswordProps,
  VerifyOTPRequest,
  VerifyOTPResponse,
} from "./ChangePasswordOTPTypes";
import { ApiResponse } from "@/response/ApiResponse";
import { call, put, takeLatest } from "redux-saga/effects";
import { ChangePasswordOTP_API, ChangePasswordVerifyOTPAPI } from "./ChangePasswordOTPAPI";
import {
  createPasswordOTPFailure,
  createPasswordOTPRequest,
  createPasswordOTPSuccess,
  getVerifyOTPFailure,
  getVerifyOTPRequest,
  getVerifyOTPSuccess,
} from "./ChangePasswordOTPSlice";
import { AxiosError } from "axios";

function* handleChangePasswordOTP(
  action: PayloadAction<ChangePasswordForgotPasswordProps>,
): Generator {
  const { email } = action.payload;
  try {
    const response: ApiResponse<null> = yield call(ChangePasswordOTP_API, { email });
    yield put(createPasswordOTPSuccess(response.message));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Send OTP Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(createPasswordOTPFailure(message));
  }
}
function* handleVerifyOTP(action: PayloadAction<VerifyOTPRequest>): Generator {
  const { email, otp } = action.payload;
  try {
    const response: ApiResponse<VerifyOTPResponse> = yield call(ChangePasswordVerifyOTPAPI, {
      email,
      otp,
    });
    yield put(
      getVerifyOTPSuccess({
        resetToken: response.data.resetToken,
        successMessage: response.message,
      }),
    );
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Verify OTP Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getVerifyOTPFailure(message));
  }
}
export default function* ChangePasswordOTPSaga() {
  yield takeLatest(createPasswordOTPRequest.type, handleChangePasswordOTP);
  yield takeLatest(getVerifyOTPRequest.type, handleVerifyOTP);
}
