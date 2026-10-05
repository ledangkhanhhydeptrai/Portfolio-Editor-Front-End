import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SkillProps } from "./skillTypes";

interface SkillState {
  loading: boolean;
  error: string | null;
  data: SkillProps[];
  userSkill: SkillProps[];
  skill: SkillProps | null;
}
const initialState: SkillState = {
  loading: false,
  error: null,
  data: [],
  userSkill: [],
  skill: null,
};
const SkillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    getSkillRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getSkillSuccess(state, action: PayloadAction<SkillProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getSkillFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getSkillIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getSkillIdSuccess(state, action: PayloadAction<SkillProps>) {
      state.loading = false;
      state.error = null;
      state.skill = action.payload;
    },
    getSkillIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getSkillUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getSkillUserSuccess(state, action: PayloadAction<SkillProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getSkillUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
     getSkillUserIdRequest(state,_action:PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getSkillUserIdSuccess(state, action: PayloadAction<SkillProps>) {
      state.loading = false;
      state.error = null;
      state.skill = action.payload;
    },
    getSkillUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getSkillRequest,
  getSkillSuccess,
  getSkillFailure,
  getSkillUserRequest,
  getSkillUserSuccess,
  getSkillUserFailure,
  getSkillIdRequest,
  getSkillIdSuccess,
  getSkillIdFailure,
  getSkillUserIdRequest,
  getSkillUserIdSuccess,
  getSkillUserIdFailure
} = SkillSlice.actions;
export default SkillSlice.reducer;
