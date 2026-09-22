import { ApiResponse } from "@/response/ApiResponse";
import { ProfileProps } from "./profileTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";

export const getAllProfileAPI = async (): Promise<
  ApiResponse<ProfileProps[]>
> => {
  try {
    const response = await fetchBaseResponse<ApiResponse<ProfileProps[]>>(
      `${API_CONFIG.ENDPOINTS.PROFILE}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log("===== PROFILE DEBUG =====");
    console.log("FULL RESPONSE:", response);
    console.log("RESPONSE STATUS:", response.status);
    console.log("RESPONSE DATA:", response.data);
    console.log("=========================");
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
