import { ApiResponse } from "@/response/ApiResponse";
import { DirectionProps } from "./DirectionTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { requestConfig } from "@/config/requestConfig";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const getAllDirectionAPI = async (): Promise<ApiResponse<DirectionProps[]>> => {
  try {
    const response = await fetchBaseResponse<DirectionProps[]>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.DIRECTION_PUBLIC}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getAllDirectionUserAPI = async (): Promise<ApiResponse<DirectionProps[]>> => {
  try {
    const response = await fetchBaseResponse<DirectionProps[]>(
      `${API_CONFIG.ENDPOINTS.USER.DIRECTION_USER}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getDirectionByIdAPI = async (
  id: string,
): Promise<ApiResponse<DirectionProps | null>> => {
  try {
    const response = await fetchBaseResponse<DirectionProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.DIRECTION_PUBLIC_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getDirectionByUserIdAPI = async (
  id: string,
): Promise<ApiResponse<DirectionProps | null>> => {
  try {
    const response = await fetchBaseResponse<DirectionProps>(
      `${API_CONFIG.ENDPOINTS.USER.DIRECTION_USER_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
