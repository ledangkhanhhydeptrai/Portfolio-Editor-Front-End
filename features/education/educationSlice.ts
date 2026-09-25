import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EducationProps } from "./educationTypes";

interface EducationState {
  loading: boolean;
  error: string | null;
  data: EducationProps[];
}
const initialState: EducationState = {
  loading: false,
  error: null,
  data: []
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
    }
  }
});
export const { getEducationRequest, getEducationSuccess, getEducationFailure } =
  EducationSlice.actions;
export default EducationSlice.reducer;
