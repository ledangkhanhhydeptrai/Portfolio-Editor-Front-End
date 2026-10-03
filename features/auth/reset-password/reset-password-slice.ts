import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ResetPasswordProps } from "./reset-password-types";

interface ResetPasswordState {
  loading: boolean;
  error: string | null;
  data: string | null;
  successMessage: string | null;
}

const initialState: ResetPasswordState = {
  loading: false,
  error: null,
  data: null,
  successMessage: null,
};

const ResetPasswordSlice = createSlice({
  name: "reset-password",

  initialState,

  reducers: {
    // =========================================
    // RESET PASSWORD
    // =========================================

    resetPasswordRequest(state, _action: PayloadAction<ResetPasswordProps>) {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    resetPasswordSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
      state.successMessage = action.payload;
    },

    resetPasswordFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
    },

    // =========================================
    // CLEAR STATE
    // =========================================

    clearResetPasswordState(state) {
      state.loading = false;
      state.error = null;
      state.data = null;
      state.successMessage = null;
    },

    clearResetPasswordError(state) {
      state.error = null;
    },

    clearResetPasswordSuccess(state) {
      state.successMessage = null;
    },
  },
});

export const {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,

  clearResetPasswordState,
  clearResetPasswordSuccess,
  clearResetPasswordError,
} = ResetPasswordSlice.actions;

export default ResetPasswordSlice.reducer;
