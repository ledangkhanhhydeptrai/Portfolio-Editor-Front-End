import { ApiResponse } from "@/response/ApiResponse";
import { EducationProps } from "./educationTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";
import { requestConfig } from "@/config/requestConfig";

export const getAllEducation = async (): Promise<ApiResponse<EducationProps>> => {
  try {
    const response = await fetchBaseResponse<EducationProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.EDUCATIONS}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getEducationById = async (id: string): Promise<ApiResponse<EducationProps | null>> => {
  try {
    const response = await fetchBaseResponse<EducationProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.EDUCATIONS_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getUserEducation = async (): Promise<ApiResponse<EducationProps>> => {
  try {
    const response = await fetchBaseResponse<EducationProps>(
      `${API_CONFIG.ENDPOINTS.USER.EDUCATIONS}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getEducationByUserId = async (id: string): Promise<ApiResponse<EducationProps | null>> => {
  try {
    const response = await fetchBaseResponse<EducationProps>(
      `${API_CONFIG.ENDPOINTS.USER.EDUCATIONS_USER_ID(id)}`,
      requestConfig("GET"),
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
