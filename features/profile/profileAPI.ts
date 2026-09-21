import { ApiResponse } from "@/response/ApiResponse";
import { ProfileProps } from "./profileTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";

export const getAllProfileAPI = async (): Promise<
  ApiResponse<ProfileProps>
> => {
  try {
    const response = await fetchBaseResponse<ApiResponse<ProfileProps>>(
      `${API_CONFIG.ENDPOINTS.PROFILE}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    if (response.status !== 200) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response.data;
  } catch (error) {
    const errors = error as AxiosError;
    console.log("Error:", errors);
    throw errors;
  }
};
