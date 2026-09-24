import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperienceProps } from "./experienceTypes";

interface ExperienceState {
  loading: boolean;
  error: string | null;
  data: ExperienceProps[];
}
const initialState: ExperienceState = {
  loading: false,
  error: null,
  data: []
};
const ExperienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    getExperienceRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getExperienceSuccess(state, action: PayloadAction<ExperienceProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getExperienceFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const {
  getExperienceRequest,
  getExperienceSuccess,
  getExperienceFailure
} = ExperienceSlice.actions;
export default ExperienceSlice.reducer;
