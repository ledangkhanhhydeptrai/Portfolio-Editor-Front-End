import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginProps, LoginResponse, RegisterProps } from "./authTypes";

interface AuthState {
  loading: boolean;
  error: string | null;
  successMessage: string | null;
  data: LoginResponse | null;
}
const initialState: AuthState = {
  loading: false,
  error: null,
  successMessage: null,
  data: null
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
    clearAuthError: (state) => {
      state.error = null;
    },
    clearAuthSuccess: (state) => {
      state.successMessage = null;
    },
    createLoginRequest(state, _action: PayloadAction<LoginProps>) {
      state.loading = true;
      state.error = null;
    },
    createLoginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
      state.successMessage = "Đăng nhập thành công";
    },
    createLoginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
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
  createLoginFailure
} = AuthSlice.actions;
export default AuthSlice.reducer;
