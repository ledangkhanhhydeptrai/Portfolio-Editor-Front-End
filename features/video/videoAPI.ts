import { ApiResponse } from "@/response/ApiResponse";
import { VideoProject } from "./videoTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { requestConfig } from "@/config/requestConfig";
import { AxiosError } from "axios";
import { HTTP_STATUS } from "@/constants/api";

export const getVideoAPI = async (): Promise<ApiResponse<VideoProject>> => {
  try {
    const response = await fetchBaseResponse<VideoProject>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.VIDEO_PROJECT}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError<string>;
    throw errors;
  }
};
export const getVideoAPIById = async (id: string): Promise<ApiResponse<VideoProject | null>> => {
  try {
    const response = await fetchBaseResponse<VideoProject>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.VIDEO_PROJECT_BY_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError<string>;
    throw errors;
  }
};
export const getVideoUserAPI = async (): Promise<ApiResponse<VideoProject[]>> => {
  try {
    const response = await fetchBaseResponse<VideoProject[]>(
      `${API_CONFIG.ENDPOINTS.USER.VIDEO_PROJECT}`,
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
export const getVideoUserAPIById = async (
  id: string,
): Promise<ApiResponse<VideoProject | null>> => {
  try {
    const response = await fetchBaseResponse<VideoProject>(
      `${API_CONFIG.ENDPOINTS.USER.VIDEO_PROJECT_USER_BY_ID(id)}`,
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
