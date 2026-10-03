import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import {
  ChangePasswordForgotPasswordProps,
  VerifyOTPRequest,
  VerifyOTPResponsePayload,
} from "./ChangePasswordOTPTypes";

interface ChangePasswordOTPState {
  loading: boolean;
  error: string | null;
  data: string | null;
  successMessage: string | null;

  // Token thực tế
  resetToken: string | null;
}

const initialState: ChangePasswordOTPState = {
  loading: false,
  error: null,
  data: null,
  successMessage: null,
  resetToken: null,
};

const ChangePasswordOTPSlice = createSlice({
  name: "change-password-otp",

  initialState,

  reducers: {
    // =========================================
    // FORGOT PASSWORD - SEND OTP
    // =========================================

    createPasswordOTPRequest(
      state,
      _action: PayloadAction<ChangePasswordForgotPasswordProps>,
    ) {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    createPasswordOTPSuccess(
      state,
      action: PayloadAction<string>,
    ) {
      state.loading = false;
      state.error = null;
      state.successMessage = action.payload;
    },

    createPasswordOTPFailure(
      state,
      action: PayloadAction<string>,
    ) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
    },

    // =========================================
    // CLEAR FORGOT PASSWORD
    // =========================================

    clearChangePasswordOTPState(state) {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    },

    clearChangePasswordOTPError(state) {
      state.error = null;
    },

    clearChangePasswordOTPSuccess(state) {
      state.successMessage = null;
    },

    // =========================================
    // VERIFY OTP
    // =========================================

    getVerifyOTPRequest(
      state,
      _action: PayloadAction<VerifyOTPRequest>,
    ) {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    getVerifyOTPSuccess(
      state,
      action: PayloadAction<VerifyOTPResponsePayload>,
    ) {
      state.loading = false;
      state.error = null;

      // QUAN TRỌNG:
      // Chỉ lưu token string
      state.resetToken = action.payload.resetToken;

      state.successMessage =
        action.payload.successMessage;
    },

    getVerifyOTPFailure(
      state,
      action: PayloadAction<string>,
    ) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
    },

    // =========================================
    // CLEAR VERIFY OTP
    // =========================================

    clearVerifyOTPError(state) {
      state.error = null;
    },

    clearVerifyOTPSuccess(state) {
      state.successMessage = null;
    },

    clearVerifyOTPState(state) {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
      state.resetToken = null;
    },
  },
});

export const {
  createPasswordOTPRequest,
  createPasswordOTPSuccess,
  createPasswordOTPFailure,

  clearChangePasswordOTPState,
  clearChangePasswordOTPSuccess,
  clearChangePasswordOTPError,

  getVerifyOTPRequest,
  getVerifyOTPSuccess,
  getVerifyOTPFailure,

  clearVerifyOTPSuccess,
  clearVerifyOTPError,
  clearVerifyOTPState,
} = ChangePasswordOTPSlice.actions;

export default ChangePasswordOTPSlice.reducer;