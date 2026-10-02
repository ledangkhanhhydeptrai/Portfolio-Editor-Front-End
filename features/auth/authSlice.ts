import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LoginProps, LoginResponse, RegisterProps } from "./authTypes";

export interface AuthUser {
  username: string;
  email: string;
}

interface AuthState {
  loading: boolean;

  error: string | null;

  successMessage: string | null;

  data: LoginResponse | null;

  user: AuthUser | null;

  authReady: boolean;
}

const initialState: AuthState = {
  loading: false,

  error: null,

  successMessage: null,

  data: null,

  user: null,

  /*
   * Không còn restore localStorage.
   *
   * Vì vậy frontend ban đầu có thể
   * render trạng thái chưa login.
   */
  authReady: true,
};

const AuthSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // =====================================================
    // REGISTER
    // =====================================================
    restoreAuthRequest(state) {
      state.authReady = false;
    },

    restoreAuthSuccess(state, action: PayloadAction<AuthUser>) {
      state.user = action.payload;
      state.authReady = true;
    },

    restoreAuthFailure(state) {
      state.user = null;
      state.data = null;
      state.authReady = true;
    },
    createRegisterRequest(state, _action: PayloadAction<RegisterProps>) {
      state.loading = true;
      state.error = null;
    },

    createRegisterSuccess(state, action: PayloadAction<string>) {
      state.loading = false;

      state.error = null;

      state.successMessage = action.payload;
    },

    createRegisterFailure(state, action: PayloadAction<string>) {
      state.loading = false;

      state.error = action.payload;
    },

    // =====================================================
    // COMMON
    // =====================================================

    clearAuthError(state) {
      state.error = null;
    },

    clearAuthSuccess(state) {
      state.successMessage = null;
    },

    // =====================================================
    // LOGIN
    // =====================================================

    createLoginRequest(state, _action: PayloadAction<LoginProps>) {
      state.loading = true;

      state.error = null;

      state.successMessage = null;
    },

    createLoginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.loading = false;

      state.error = null;

      state.data = action.payload;

      state.user = {
        username: action.payload.username,

        email: action.payload.email,
      };

      state.authReady = true;

      state.successMessage = "Đăng nhập thành công";
    },

    createLoginFailure(state, action: PayloadAction<string>) {
      state.loading = false;

      state.error = action.payload;

      state.successMessage = null;

      state.authReady = true;
    },

    // =====================================================
    // LOGOUT
    // =====================================================

    createLogoutRequest(state) {
      state.loading = true;

      state.error = null;

      state.successMessage = null;
    },

    createLogoutSuccess(state) {
      state.loading = false;

      state.error = null;

      state.successMessage = null;

      state.data = null;

      state.user = null;

      state.authReady = true;
    },

    createLogoutFailure(state, action: PayloadAction<string>) {
      state.loading = false;

      state.error = action.payload;
    },

    // =====================================================
    // CLEAR AUTH
    // =====================================================

    clearAuth(state) {
      state.loading = false;

      state.error = null;

      state.successMessage = null;

      state.data = null;

      state.user = null;

      state.authReady = true;
    },
  },
});

export const {
  createRegisterRequest,
  createRegisterSuccess,
  createRegisterFailure,

  clearAuthError,
  clearAuthSuccess,

  createLoginRequest,
  createLoginSuccess,
  createLoginFailure,

  createLogoutRequest,
  createLogoutSuccess,
  createLogoutFailure,

  clearAuth,
  restoreAuthRequest,
  restoreAuthSuccess,
  restoreAuthFailure
} = AuthSlice.actions;

export default AuthSlice.reducer;
