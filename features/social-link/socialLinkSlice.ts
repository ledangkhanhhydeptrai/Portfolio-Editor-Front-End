import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SocialLinkProps } from "./socialLinkTypes";

interface SocialLinkState {
  loading: boolean;
  error: string | null;
  data: SocialLinkProps[];
  social_link: SocialLinkProps | null;
}
const initialState: SocialLinkState = {
  loading: false,
  error: null,
  data: [],
  social_link: null,
};
const SocialLinkSlice = createSlice({
  name: "socialLink",
  initialState,
  reducers: {
    getLinkRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getLinkSuccess(state, action: PayloadAction<SocialLinkProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getLinkFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getLinkIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getLinkIdSuccess(state, action: PayloadAction<SocialLinkProps>) {
      state.loading = false;
      state.error = null;
      state.social_link = action.payload;
    },
    getLinkIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getLinkUserIdRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getLinkUserIdSuccess(state, action: PayloadAction<SocialLinkProps>) {
      state.loading = false;
      state.error = null;
      state.social_link = action.payload;
    },
    getLinkUserIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getLinkUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getLinkUserSuccess(state, action: PayloadAction<SocialLinkProps[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getLinkUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getLinkRequest,
  getLinkSuccess,
  getLinkFailure,
  getLinkUserRequest,
  getLinkUserSuccess,
  getLinkUserFailure,
  getLinkIdRequest,
  getLinkIdSuccess,
  getLinkIdFailure,
  getLinkUserIdRequest,
  getLinkUserIdSuccess,
  getLinkUserIdFailure
} = SocialLinkSlice.actions;
export default SocialLinkSlice.reducer;
