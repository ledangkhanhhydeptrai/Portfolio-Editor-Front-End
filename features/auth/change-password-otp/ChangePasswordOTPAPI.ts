import { ApiResponse } from "@/response/ApiResponse";
import {
  ChangePasswordForgotPasswordProps,
  VerifyOTPRequest,
  VerifyOTPResponse,
} from "./ChangePasswordOTPTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const ChangePasswordOTP_API = async ({
  email,
}: ChangePasswordForgotPasswordProps): Promise<ApiResponse<null>> => {
  try {
    const response = await fetchBaseResponse<null>(`${API_CONFIG.ENDPOINTS.FORGOT_PASSWORD}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { email },
    });
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP_STATUS:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const ChangePasswordVerifyOTPAPI = async ({
  email,
  otp,
}: VerifyOTPRequest): Promise<ApiResponse<VerifyOTPResponse>> => {
  try {
    const response = await fetchBaseResponse<VerifyOTPResponse>(
      `${API_CONFIG.ENDPOINTS.VERIFY_OTP}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email, otp },
      },
    );
    if(response.status!==HTTP_STATUS.OK){
      throw new Error(`HTTP_STATUS:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
