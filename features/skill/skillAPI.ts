import { ApiResponse } from "@/response/ApiResponse";
import { SkillProps } from "./skillTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";
import { HTTP_STATUS } from "@/constants/api";
import { requestConfig } from "@/config/requestConfig";

export const getSkillAPI = async (): Promise<ApiResponse<SkillProps>> => {
  try {
    const response = await fetchBaseResponse<SkillProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.SKILLS}`,
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
export const getSkillAPIById = async (id: string): Promise<ApiResponse<SkillProps | null>> => {
  try {
    const response = await fetchBaseResponse<SkillProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.SKILLS_BY_ID(id)}`,
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
export const getSkillUserAPI = async (): Promise<ApiResponse<SkillProps[]>> => {
  try {
    const response = await fetchBaseResponse<SkillProps[]>(
      `${API_CONFIG.ENDPOINTS.USER.SKILLS}`,
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
export const getSkillAPIUserById = async (id: string): Promise<ApiResponse<SkillProps | null>> => {
  try {
    const response = await fetchBaseResponse<SkillProps>(
      `${API_CONFIG.ENDPOINTS.USER.SKILLS_USER_BY_ID(id)}`,
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