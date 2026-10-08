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
    getWorkStylesSuccess(state, action: PayloadAction<WorkStyleProps>) {
      state.loading = false;
      state.error = null;
      state.work = action.payload;
    },
    getWorkStylesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getWorkStyleByIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getWorkStyleByIdSuccess(state, action: PayloadAction<WorkStyleProps>) {
      state.loading = false;
      state.error = null;
      state.work = action.payload;
    },
    getWorkStyleByIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getWorkStylesUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getWorkStylesUserSuccess(state, action: PayloadAction<WorkStyleProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getWorkStylesUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getWorkStyleByUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getWorkStyleByUserIdSuccess(state, action: PayloadAction<WorkStyleProps>) {
      state.loading = false;
      state.error = null;
      state.work = action.payload;
    },
    getWorkStyleByUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getWorkStylesRequest,
  getWorkStylesSuccess,
  getWorkStylesFailure,
  getWorkStyleByIdRequest,
  getWorkStyleByIdSuccess,
  getWorkStyleByIdFailure,
  getWorkStylesUserRequest,
  getWorkStylesUserSuccess,
  getWorkStylesUserFailure,
  getWorkStyleByUserIdRequest,
  getWorkStyleByUserIdSuccess,
  getWorkStyleByUserIdFailure,
} = WorkStyleSlice.actions;
export default WorkStyleSlice.reducer;
