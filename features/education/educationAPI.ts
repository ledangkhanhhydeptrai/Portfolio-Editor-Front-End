import { ApiResponse } from "@/response/ApiResponse";
import { EducationProps } from "./educationTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";
import { requestConfig } from "@/config/requestConfig";

export const getAllEducation = async (): Promise<
  ApiResponse<EducationProps>
> => {
  try {
    const response = await fetchBaseResponse<ApiResponse<EducationProps>>(
      `${API_CONFIG.ENDPOINTS.EDUCATIONS}`,
      requestConfig("GET")
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response.data;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
