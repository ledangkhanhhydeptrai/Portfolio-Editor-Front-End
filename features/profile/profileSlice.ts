import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileProps } from "./profileTypes";

interface ProfileState {
  loading: boolean;
  error: string | null;
  data: ProfileProps[];
  user: ProfileProps | null;
}
const initialState: ProfileState = {
  loading: false,
  error: null,
  data: [],
  user: null,
};
const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfileRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getProfileSuccess(state, action: PayloadAction<ProfileProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getProfileFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getProfileUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getProfileUserSuccess(state, action: PayloadAction<ProfileProps>) {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    getProfileUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
  getProfileUserRequest,
  getProfileUserSuccess,
  getProfileUserFailure,
} = ProfileSlice.actions;
export default ProfileSlice.reducer;
