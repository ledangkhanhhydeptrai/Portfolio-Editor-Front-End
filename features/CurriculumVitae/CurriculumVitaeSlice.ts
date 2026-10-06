import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurriculumProps } from "./CurriculumVitaeTypes";

interface CurriculumState {
  loading: boolean;
  error: string | null;
  data: CurriculumProps[];
  curriculum: CurriculumProps | null;
  user: CurriculumProps[];
}
const initialState: CurriculumState = {
  loading: false,
  error: null,
  data: [],
  curriculum: null,
  user: [],
};
const CurriculumSlice = createSlice({
  name: "curriculum",
  initialState,
  reducers: {
    getCurriculumRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getCurriculumSuccess(state, action: PayloadAction<CurriculumProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getCurriculumFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getCurriculumIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getCurriculumIdSuccess(state, action: PayloadAction<CurriculumProps>) {
      state.loading = false;
      state.error = null;
      state.curriculum = action.payload;
    },
    getCurriculumIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getCurriculumUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getCurriculumUserSuccess(state, action: PayloadAction<CurriculumProps[]>) {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    getCurriculumUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getCurriculumUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getCurriculumUserIdSuccess(state, action: PayloadAction<CurriculumProps>) {
      state.loading = false;
      state.error = null;
      state.curriculum = action.payload;
    },
    getCurriculumUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getCurriculumRequest,
  getCurriculumSuccess,
  getCurriculumFailure,
  getCurriculumIdRequest,
  getCurriculumIdSuccess,
  getCurriculumIdFailure,
  getCurriculumUserRequest,
  getCurriculumUserSuccess,
  getCurriculumUserFailure,
  getCurriculumUserIdRequest,
  getCurriculumUserIdSuccess,
  getCurriculumUserIdFailure
} = CurriculumSlice.actions;
export default CurriculumSlice.reducer;
