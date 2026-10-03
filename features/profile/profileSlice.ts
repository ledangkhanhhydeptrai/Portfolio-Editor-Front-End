import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { ProfileProps } from "./profileTypes";

interface ProfileState {
  loading: boolean;
  error: string | null;

  // Public portfolio owner
  data: ProfileProps | null;

  // Current logged-in user
  user: ProfileProps | null;
}

const initialState: ProfileState = {
  loading: false,
  error: null,
  data: null,
  user: null,
};

const ProfileSlice = createSlice({
  name: "profile",

  initialState,

  reducers: {
    // =========================
    // PUBLIC PROFILE
    // =========================

    getProfileRequest(state) {
      state.loading = true;
      state.error = null;
    },

    getProfileSuccess(
      state,
      action: PayloadAction<ProfileProps>,
    ) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },

    getProfileFailure(
      state,
      action: PayloadAction<string>,
    ) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },

    // =========================
    // USER PROFILE
    // =========================

    getProfileUserRequest(state) {
      state.loading = true;
      state.error = null;
    },

    getProfileUserSuccess(
      state,
      action: PayloadAction<ProfileProps>,
    ) {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },

    getProfileUserFailure(
      state,
      action: PayloadAction<string>,
    ) {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
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