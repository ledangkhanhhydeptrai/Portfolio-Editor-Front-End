import { ApiResponse } from "@/response/ApiResponse";
import { WorkStyleProps } from "./WorkStylesTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAllStyles } from "./WorkStylesAPI";
import {
  getWorkStylesFailure,
  getWorkStylesRequest,
  getWorkStylesSuccess,
} from "./WorkStylesSlice";
import { AxiosError } from "axios";

function* handleGetAllWorkStyles() {
  try {
    const response: ApiResponse<WorkStyleProps[]> = yield call(getAllStyles);
    yield put(getWorkStylesSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError<ApiResponse<string>>;
    let message = "Get All Work Styles Failure";
    if (errors.response && errors.response.data && errors.response.data.message) {
      message = errors.response.data.message;
    }
    yield put(getWorkStylesFailure(message));
  }
}
export default function* WorkStyleSaga() {
  yield takeLatest(getWorkStylesRequest.type, handleGetAllWorkStyles);
}
