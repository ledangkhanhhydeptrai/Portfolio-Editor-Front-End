import { ApiResponse } from "@/response/ApiResponse";
import { CurriculumProps } from "./CurriculumVitaeTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { requestConfig } from "@/config/requestConfig";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const getAllCurriculumAPI = async (): Promise<ApiResponse<CurriculumProps[]>> => {
  try {
    const response = await fetchBaseResponse<CurriculumProps[]>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.CURRICULUM_PUBLIC}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getCurriculumByIdAPI = async (
  id: string,
): Promise<ApiResponse<CurriculumProps | null>> => {
  try {
    const response = await fetchBaseResponse<CurriculumProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.CURRICULUM_PUBLIC_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getAllCurriculumUserAPI = async (): Promise<ApiResponse<CurriculumProps[]>> => {
  try {
    const response = await fetchBaseResponse<CurriculumProps[]>(
      `${API_CONFIG.ENDPOINTS.USER.CURRICULUM_USER}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getCurriculumByUserIdAPI = async (
  id: string,
): Promise<ApiResponse<CurriculumProps | null>> => {
  try {
    const response = await fetchBaseResponse<CurriculumProps>(
      `${API_CONFIG.ENDPOINTS.USER.CURRICULUM_USER_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) throw new Error(`HTTP_STATUS:${response.status}`);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
