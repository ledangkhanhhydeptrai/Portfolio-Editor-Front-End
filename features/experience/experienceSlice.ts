import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperienceProps } from "./experienceTypes";

interface ExperienceState {
  loading: boolean;
  error: string | null;
  data: ExperienceProps[];
  userExperience: ExperienceProps[];
  experience: ExperienceProps | null;
}
const initialState: ExperienceState = {
  loading: false,
  error: null,
  data: [],
  userExperience: [],
  experience: null,
};
const ExperienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    getExperienceRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getExperienceSuccess(state, action: PayloadAction<ExperienceProps>) {
      state.loading = false;
      state.error = null;
      state.experience = action.payload;
    },
    getExperienceFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getExperienceIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getExperienceIdSuccess(state, action: PayloadAction<ExperienceProps>) {
      state.loading = false;
      state.error = null;
      state.experience = action.payload;
    },
    getExperienceIdFailure(state, action: PayloadAction<string>) {
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
      state.userExperience = action.payload;
    },
    getExperienceUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getExperienceUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getExperienceUserIdSuccess(state, action: PayloadAction<ExperienceProps>) {
      state.loading = false;
      state.error = null;
      state.experience = action.payload;
    },
    getExperienceUserIdFailure(state, action: PayloadAction<string>) {
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
  getExperienceIdRequest,
  getExperienceIdSuccess,
  getExperienceIdFailure,
  getExperienceUserIdRequest,
  getExperienceUserIdSuccess,
  getExperienceUserIdFailure
} = ExperienceSlice.actions;
export default ExperienceSlice.reducer;
