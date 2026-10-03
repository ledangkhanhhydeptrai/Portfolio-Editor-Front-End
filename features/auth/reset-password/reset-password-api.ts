import { ApiResponse } from "@/response/ApiResponse";
import { ResetPasswordProps } from "./reset-password-types";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const ResetPasswordAPI = async ({
  resetToken,
  newPassword,
  confirmPassword,
}: ResetPasswordProps): Promise<ApiResponse<null>> => {
  try {
    const response = await fetchBaseResponse<null>(`${API_CONFIG.ENDPOINTS.RESET_PASSWORD}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: { newPassword, confirmPassword, resetToken },
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
