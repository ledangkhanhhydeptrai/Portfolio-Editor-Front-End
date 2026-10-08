import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoProject } from "./videoTypes";

interface VideoState {
  loading: boolean;
  error: string | null;
  data: VideoProject[];
  video: VideoProject | null;
}
const initialState: VideoState = {
  loading: false,
  error: null,
  data: [],
  video: null,
};
const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getVideoRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getVideoSuccess(state, action: PayloadAction<VideoProject>) {
      state.loading = false;
      state.error = null;
      state.video = action.payload;
    },
    getVideoFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getVideoRequestById(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getVideoSuccessById(state, action: PayloadAction<VideoProject>) {
      state.loading = false;
      state.error = null;
      state.video = action.payload;
    },
    getVideoFailureById(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getVideoRequestUserById(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getVideoSuccessUserById(state, action: PayloadAction<VideoProject>) {
      state.loading = false;
      state.error = null;
      state.video = action.payload;
    },
    getVideoFailureUserById(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getVideoUserRequest
    (state) {
      state.loading = true;
      state.error = null;
    },
    getVideoUserSuccess(state, action: PayloadAction<VideoProject[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getVideoUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getVideoRequest,
  getVideoSuccess,
  getVideoFailure,
  getVideoUserRequest,
  getVideoUserSuccess,
  getVideoUserFailure,
  getVideoRequestById,
  getVideoSuccessById,
  getVideoFailureById,
  getVideoRequestUserById,
  getVideoSuccessUserById,
  getVideoFailureUserById
} = videoSlice.actions;
export default videoSlice.reducer;
