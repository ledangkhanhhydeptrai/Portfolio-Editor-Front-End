import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SkillProps } from "./skillTypes";

interface SkillState {
  loading: boolean;
  error: string | null;

  // PUBLIC
  data: SkillProps[];

  // CURRENT USER
  userSkill: SkillProps[];

  // DETAIL
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
    // =========================================================
    // PUBLIC - GET ALL
    // =========================================================

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
      state.data = [];
    },

    // =========================================================
    // PUBLIC - GET BY ID
    // =========================================================

    getSkillIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.skill = null;
    },

    getSkillIdSuccess(state, action: PayloadAction<SkillProps>) {
      state.loading = false;
      state.error = null;
      state.skill = action.payload;
    },

    getSkillIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.skill = null;
    },

    // =========================================================
    // USER - GET ALL
    // =========================================================

    getSkillUserRequest(state) {
      state.loading = true;
      state.error = null;
    },

    getSkillUserSuccess(state, action: PayloadAction<SkillProps[]>) {
      state.loading = false;
      state.error = null;

      // QUAN TRỌNG
      state.userSkill = action.payload;
    },

    getSkillUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.userSkill = [];
    },

    // =========================================================
    // USER - GET BY ID
    // =========================================================

    getSkillUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.skill = null;
    },

    getSkillUserIdSuccess(state, action: PayloadAction<SkillProps>) {
      state.loading = false;
      state.error = null;
      state.skill = action.payload;
    },

    getSkillUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.skill = null;
    },
  },
});

export const {
  getSkillRequest,
  getSkillSuccess,
  getSkillFailure,

  getSkillIdRequest,
  getSkillIdSuccess,
  getSkillIdFailure,

  getSkillUserRequest,
  getSkillUserSuccess,
  getSkillUserFailure,

  getSkillUserIdRequest,
  getSkillUserIdSuccess,
  getSkillUserIdFailure,
} = SkillSlice.actions;

export default SkillSlice.reducer;
