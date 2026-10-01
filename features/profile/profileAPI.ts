import { ApiResponse } from "@/response/ApiResponse";
import { ProfileProps } from "./profileTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";
import { HTTP_STATUS } from "@/constants/api";
import { requestConfig } from "@/config/requestConfig";

export const getAllProfileAPI = async (): Promise<
  ApiResponse<ProfileProps[]>
> => {
  try {
    const response = await fetchBaseResponse<ProfileProps[]>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.PROFILE}`,
      requestConfig("GET")
    );
    console.log("===== PROFILE DEBUG =====");
    console.log("FULL RESPONSE:", response);
    console.log("RESPONSE STATUS:", response.status);
    console.log("RESPONSE DATA:", response.data);
    console.log("=========================");
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    console.log("Error:", errors);
    throw errors;
  }
};
