import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoProject } from "./videoTypes";

interface VideoState {
  loading: boolean;
  error: string | null;
  data: VideoProject[];
}
const initialState: VideoState = {
  loading: false,
  error: null,
  data: [],
};
const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getVideoRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getVideoSuccess(state, action: PayloadAction<VideoProject[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getVideoFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { getVideoRequest, getVideoSuccess, getVideoFailure } = videoSlice.actions;
export default videoSlice.reducer;
