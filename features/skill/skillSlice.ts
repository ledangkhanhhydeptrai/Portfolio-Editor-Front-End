import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SkillProps } from "./skillTypes";

interface SkillState {
  loading: boolean;
  error: string | null;
  data: SkillProps[];
  userSkill: SkillProps[];
}
const initialState: SkillState = {
  loading: false,
  error: null,
  data: [],
  userSkill: [],
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
      console.log("SKILL SUCCESS PAYLOAD:", action.payload);
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getSkillFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getSkillUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getSkillUserSuccess(state, action: PayloadAction<SkillProps[]>) {
      console.log("SKILL SUCCESS PAYLOAD:", action.payload);
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getSkillUserFailure(state, action: PayloadAction<string>) {
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
} = SkillSlice.actions;
export default SkillSlice.reducer;
