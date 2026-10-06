import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkStyleProps } from "./WorkStylesTypes";

interface WorkState {
  loading: boolean;
  error: string | null;
  data: WorkStyleProps[];
  work: WorkStyleProps | null;
}
const initialState: WorkState = {
  loading: false,
  error: null,
  data: [],
  work: null,
};
const WorkStyleSlice = createSlice({
  name: "work-style",
  initialState,
  reducers: {
    getWorkStylesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getWorkStylesSuccess(state, action: PayloadAction<WorkStyleProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getWorkStylesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { getWorkStylesRequest, getWorkStylesSuccess, getWorkStylesFailure } =
  WorkStyleSlice.actions;
export default WorkStyleSlice.reducer;
