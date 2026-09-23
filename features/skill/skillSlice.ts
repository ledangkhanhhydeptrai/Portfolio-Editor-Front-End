import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SkillProps } from "./skillTypes";

interface SkillState {
  loading: boolean;
  error: string | null;
  data: SkillProps[];
}
const initialState: SkillState = {
  loading: false,
  error: null,
  data: []
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
    }
  }
});
export const { getSkillRequest, getSkillSuccess, getSkillFailure } =
  SkillSlice.actions;
export default SkillSlice.reducer;
