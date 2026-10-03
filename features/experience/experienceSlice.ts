import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperienceProps } from "./experienceTypes";

interface ExperienceState {
  loading: boolean;
  error: string | null;
  data: ExperienceProps[];
  userExperience: ExperienceProps[];
}
const initialState: ExperienceState = {
  loading: false,
  error: null,
  data: [],
  userExperience: [],
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
    },
    getExperienceUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getExperienceUserSuccess(state, action: PayloadAction<ExperienceProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getExperienceUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getExperienceRequest,
  getExperienceSuccess,
  getExperienceFailure,
  getExperienceUserRequest,
  getExperienceUserSuccess,
  getExperienceUserFailure,
} = ExperienceSlice.actions;
export default ExperienceSlice.reducer;
