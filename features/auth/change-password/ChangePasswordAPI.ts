import { API_CONFIG } from "@/config/api";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { ApiResponse } from "@/response/ApiResponse";
import { ChangePasswordUpdateProps } from "./ChangePasswordTypes";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const ChangePasswordUpdateAPI = async ({
  email,
  newPassword,
  confirmPassword,
}: ChangePasswordUpdateProps): Promise<ApiResponse<null>> => {
  try {
    const response = await fetchBaseResponse<null>(`${API_CONFIG.ENDPOINTS.CHANGE_PASSWORD}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, newPassword, confirmPassword },
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
