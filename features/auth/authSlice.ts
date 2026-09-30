import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterProps } from "./authTypes";

interface AuthState {
  loading: boolean;
  error: string | null;
  data: null;
}
const initialState: AuthState = {
  loading: false,
  error: null,
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
    createRegisterSuccess(state, action: PayloadAction<null>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    createRegisterFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearAuthError: (state) => {
      state.error = null;
    }
  }
});
export const {
  createRegisterRequest,
  createRegisterSuccess,
  createRegisterFailure,
  clearAuthError
} = AuthSlice.actions;
export default AuthSlice.reducer;
