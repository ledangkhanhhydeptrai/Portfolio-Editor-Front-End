import { ApiResponse } from "@/response/ApiResponse";
import { SocialLinkProps } from "./socialLinkTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAllSocialLink } from "./socialLinkAPI";
import {
  getLinkFailure,
  getLinkRequest,
  getLinkSuccess
} from "./socialLinkSlice";
import { AxiosError } from "axios";

function* handleGetSocialLink() {
  try {
    const response: ApiResponse<SocialLinkProps[]> =
      yield call(getAllSocialLink);
    yield put(getLinkSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Social Link Failure";
    if (
      errors.response &&
      errors.response.data &&
      errors.response.data.message
    ) {
      message = errors.response.data.message;
    }
    yield put(getLinkFailure(message));
  }
}
export default function* LinkSaga() {
  yield takeLatest(getLinkRequest.type, handleGetSocialLink);
}
