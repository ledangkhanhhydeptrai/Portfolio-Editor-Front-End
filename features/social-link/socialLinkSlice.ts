import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SocialLinkProps } from "./socialLinkTypes";

interface SocialLinkState {
  loading: boolean;
  error: string | null;
  data: SocialLinkProps[];
}
const initialState: SocialLinkState = {
  loading: false,
  error: null,
  data: []
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
    }
  }
});
export const { getLinkRequest, getLinkSuccess, getLinkFailure } =
  SocialLinkSlice.actions;
export default SocialLinkSlice.reducer;
