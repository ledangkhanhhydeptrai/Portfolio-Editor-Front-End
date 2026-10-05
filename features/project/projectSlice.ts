import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectProps } from "./projectTypes";

interface ProjectState {
  loading: boolean;
  error: string | null;
  data: ProjectProps[];
  project: ProjectProps | null;
}
const initialState: ProjectState = {
  loading: false,
  error: null,
  data: [],
  project: null,
};
const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getProjectRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getProjectSuccess(state, action: PayloadAction<ProjectProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getProjectFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getProjectIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getProjectIdSuccess(state, action: PayloadAction<ProjectProps>) {
      state.loading = false;
      state.error = null;
      state.project = action.payload;
    },
    getProjectIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getProjectUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getProjectUserSuccess(state, action: PayloadAction<ProjectProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getProjectUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getProjectUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getProjectUserIdSuccess(state, action: PayloadAction<ProjectProps>) {
      state.loading = false;
      state.error = null;
      state.project = action.payload;
    },
    getProjectUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getProjectRequest,
  getProjectSuccess,
  getProjectFailure,
  getProjectUserRequest,
  getProjectUserSuccess,
  getProjectUserFailure,
  getProjectIdRequest,
  getProjectIdSuccess,
  getProjectIdFailure,
  getProjectUserIdRequest,
  getProjectUserIdSuccess,
  getProjectUserIdFailure
} = ProjectSlice.actions;
export default ProjectSlice.reducer;
