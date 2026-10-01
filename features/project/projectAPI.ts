import { ApiResponse } from "@/response/ApiResponse";
import { ProjectProps } from "./projectTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";
import { HTTP_STATUS } from "@/constants/api";
import { requestConfig } from "@/config/requestConfig";

export const getProjectAPI = async (): Promise<ApiResponse<ProjectProps[]>> => {
  try {
    const response = await fetchBaseResponse<ProjectProps[]>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.PROJECTS}`,
      requestConfig("GET")
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
