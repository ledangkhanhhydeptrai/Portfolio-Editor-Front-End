import { ApiResponse } from "@/response/ApiResponse";
import { WorkStyleProps } from "./WorkStylesTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { requestConfig } from "@/config/requestConfig";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const getAllStyles = async (): Promise<ApiResponse<WorkStyleProps | null>> => {
  try {
    const response = await fetchBaseResponse<WorkStyleProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.WORK_STYLES_PUBLIC}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getStylesPublicById = async (
  id: string,
): Promise<ApiResponse<WorkStyleProps | null>> => {
  try {
    const response = await fetchBaseResponse<WorkStyleProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.WORK_STYLES_PUBLIC_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getAllStylesByUser = async (): Promise<ApiResponse<WorkStyleProps[]>> => {
  try {
    const response = await fetchBaseResponse<WorkStyleProps[]>(
      `${API_CONFIG.ENDPOINTS.USER.WORK_STYLES_USER}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getStylesUserById = async (
  id: string,
): Promise<ApiResponse<WorkStyleProps | null>> => {
  try {
    const response = await fetchBaseResponse<WorkStyleProps>(
      `${API_CONFIG.ENDPOINTS.USER.WORK_STYLES_USER_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
