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

  // Response của lần login hiện tại
  data: LoginResponse | null;

  // Dùng để xác định UI đang có user
  user: AuthUser | null;

  // Cho biết frontend đã kiểm tra localStorage xong chưa
  authReady: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  successMessage: null,
  data: null,
  user: null,
  authReady: false
};

const AuthSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    createRegisterRequest(
      state,
      _action: PayloadAction<RegisterProps>
    ) {
      state.loading = true;
      state.error = null;
    },

    createRegisterSuccess(
      state,
      action: PayloadAction<string>
    ) {
      state.loading = false;
      state.error = null;
      state.successMessage = action.payload;
    },

    createRegisterFailure(
      state,
      action: PayloadAction<string>
    ) {
      state.loading = false;
      state.error = action.payload;
    },

    clearAuthError(state) {
      state.error = null;
    },

    clearAuthSuccess(state) {
      state.successMessage = null;
    },

    createLoginRequest(
      state,
      _action: PayloadAction<LoginProps>
    ) {
      state.loading = true;
      state.error = null;
    },

    createLoginSuccess(
      state,
      action: PayloadAction<LoginResponse>
    ) {
      state.loading = false;
      state.error = null;

      state.data = action.payload;

      state.user = {
        username: action.payload.username,
        email: action.payload.email
      };

      state.authReady = true;

      state.successMessage = "Đăng nhập thành công";
    },

    createLoginFailure(
      state,
      action: PayloadAction<string>
    ) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
      state.authReady = true;
    },

    restoreAuth(
      state,
      action: PayloadAction<AuthUser>
    ) {
      state.user = action.payload;
      state.authReady = true;
    },

    finishAuthRestore(state) {
      state.authReady = true;
    },

    clearAuth(state) {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
      state.data = null;
      state.user = null;
      state.authReady = true;
    }
  }
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

  restoreAuth,
  finishAuthRestore,
  clearAuth
} = AuthSlice.actions;

export default AuthSlice.reducer;