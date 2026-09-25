import { ApiResponse } from "@/response/ApiResponse";
import { ExperienceProps } from "./experienceTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";
import { HTTP_STATUS } from "@/constants/api";
import { requestConfig } from "@/config/requestConfig";

export const ExperienceAPI = async (): Promise<
  ApiResponse<ExperienceProps[]>
> => {
  try {
    const response = await fetchBaseResponse<ApiResponse<ExperienceProps[]>>(
      `${API_CONFIG.ENDPOINTS.EXPERIENCES}`,
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
