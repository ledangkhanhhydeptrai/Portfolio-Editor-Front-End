import { ApiResponse } from "@/response/ApiResponse";
import { SocialLinkProps } from "./socialLinkTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllSocialLink,
  getAllUserSocialLink,
  getSocialLinkById,
  getSocialLinkUserById,
} from "./socialLinkAPI";
import {
  getLinkFailure,
  getLinkIdFailure,
  getLinkIdRequest,
  getLinkIdSuccess,
  getLinkRequest,
  getLinkSuccess,
  getLinkUserFailure,
  getLinkUserIdFailure,
  getLinkUserIdRequest,
  getLinkUserIdSuccess,
  getLinkUserRequest,
  getLinkUserSuccess,
} from "./socialLinkSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetSocialLink() {
  try {
    const response: ApiResponse<SocialLinkProps> = yield call(getAllSocialLink);
    yield put(getLinkSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Social Link Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getLinkFailure(message));
  }
}
function* handleGetSocialLinkById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<SocialLinkProps> = yield call(getSocialLinkById, action.payload);
    yield put(getLinkIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Social Link Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getLinkIdFailure(message));
  }
}
function* handleGetUserSocialLink() {
  try {
    const response: ApiResponse<SocialLinkProps[]> = yield call(getAllUserSocialLink);
    yield put(getLinkUserSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Social Link Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getLinkUserFailure(message));
  }
}
function* handleGetSocialLinkUserById(action: PayloadAction<string>) {
  try {
    const response: ApiResponse<SocialLinkProps> = yield call(
      getSocialLinkUserById,
      action.payload,
    );
    yield put(getLinkUserIdSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get Social Link Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getLinkUserIdFailure(message));
  }
}
export default function* LinkSaga() {
  yield takeLatest(getLinkRequest.type, handleGetSocialLink);
  yield takeLatest(getLinkUserRequest.type, handleGetUserSocialLink);
  yield takeLatest(getLinkIdRequest.type, handleGetSocialLinkById);
  yield takeLatest(getLinkUserIdRequest.type, handleGetSocialLinkUserById);
}
