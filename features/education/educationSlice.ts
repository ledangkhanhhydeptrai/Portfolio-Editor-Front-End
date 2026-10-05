import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EducationProps } from "./educationTypes";

interface EducationState {
  loading: boolean;
  error: string | null;
  data: EducationProps[];
  user: EducationProps[];
  education: EducationProps | null;
}
const initialState: EducationState = {
  loading: false,
  error: null,
  data: [],
  user: [],
  education: null,
};
const EducationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    getEducationRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getEducationSuccess(state, action: PayloadAction<EducationProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getEducationFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getEducationIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getEducationIdSuccess(state, action: PayloadAction<EducationProps>) {
      state.loading = false;
      state.error = null;
      state.education = action.payload;
    },
    getEducationIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getEducationUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getEducationUserSuccess(state, action: PayloadAction<EducationProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getEducationUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getEducationUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getEducationUserIdSuccess(state, action: PayloadAction<EducationProps>) {
      state.loading = false;
      state.error = null;
      state.education = action.payload;
    },
    getEducationUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getEducationRequest,
  getEducationSuccess,
  getEducationFailure,
  getEducationUserRequest,
  getEducationUserSuccess,
  getEducationUserFailure,
  getEducationIdRequest,
  getEducationIdSuccess,
  getEducationIdFailure,
  getEducationUserIdRequest,
  getEducationUserIdSuccess,
  getEducationUserIdFailure
} = EducationSlice.actions;
export default EducationSlice.reducer;
