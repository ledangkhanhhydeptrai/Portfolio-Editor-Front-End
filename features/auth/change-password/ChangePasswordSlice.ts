import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChangePasswordUpdateProps } from "./ChangePasswordTypes";

interface ChangePasswordState {
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: ChangePasswordState = {
  loading: false,
  error: null,
  successMessage: null,
};

const changePasswordSlice = createSlice({
  name: "changePassword",

  initialState,

  reducers: {
    changePasswordRequest(state, _action: PayloadAction<ChangePasswordUpdateProps>) {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    changePasswordSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
      state.successMessage = action.payload;
    },

    changePasswordFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
    },
    clearChangePasswordState(state) {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    },
    clearChangePasswordError(state) {
      state.error = null;
    },

    clearChangePasswordSuccess(state) {
      state.successMessage = null;
    },
  },
});

export const {
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
  clearChangePasswordError,
  clearChangePasswordSuccess,
  clearChangePasswordState
} = changePasswordSlice.actions;

export default changePasswordSlice.reducer;
