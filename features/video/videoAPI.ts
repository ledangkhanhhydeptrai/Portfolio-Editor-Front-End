import { ApiResponse } from "@/response/ApiResponse";
import { VideoProject } from "./videoTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { requestConfig } from "@/config/requestConfig";
import { AxiosError } from "axios";

export const getVideoAPI = async (): Promise<ApiResponse<VideoProject[]>> => {
  try {
    const response = await fetchBaseResponse<VideoProject[]>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.VIDEO_PROJECT}`,
      requestConfig("GET"),
    );
    if (response.status !== 200) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError<string>;
    throw errors;
  }
};
