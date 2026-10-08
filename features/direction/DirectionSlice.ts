import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DirectionProps } from "./DirectionTypes";

interface DirectionState {
  loading: boolean;
  error: string | null;
  data: DirectionProps[];
  direction: DirectionProps | null;
}
const initialState: DirectionState = {
  loading: false,
  error: null,
  data: [],
  direction: null,
};
const DirectionSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {
    getDirectionRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getDirectionSuccess(state, action: PayloadAction<DirectionProps>) {
      state.loading = false;
      state.error = null;
      state.direction = action.payload;
    },
    getDirectionFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getDirectionUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getDirectionUserSuccess(state, action: PayloadAction<DirectionProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getDirectionUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getDirectionIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getDirectionIdSuccess(state, action: PayloadAction<DirectionProps>) {
      state.loading = false;
      state.error = null;
      state.direction = action.payload;
    },
    getDirectionIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getDirectionUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getDirectionUserIdSuccess(state, action: PayloadAction<DirectionProps>) {
      state.loading = false;
      state.error = null;
      state.direction = action.payload;
    },
    getDirectionUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getDirectionRequest,
  getDirectionSuccess,
  getDirectionFailure,
  getDirectionUserRequest,
  getDirectionUserSuccess,
  getDirectionUserFailure,
  getDirectionIdRequest,
  getDirectionIdSuccess,
  getDirectionIdFailure,
  getDirectionUserIdRequest,
  getDirectionUserIdSuccess,
  getDirectionUserIdFailure,
} = DirectionSlice.actions;
export default DirectionSlice.reducer;
