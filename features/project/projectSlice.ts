import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectProps } from "./projectTypes";

interface ProjectState {
  loading: boolean;
  error: string | null;
  data: ProjectProps[];
}
const initialState: ProjectState = {
  loading: false,
  error: null,
  data: []
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
    }
  }
});
export const { getProjectRequest, getProjectSuccess, getProjectFailure } =
  ProjectSlice.actions;
export default ProjectSlice.reducer;
