import { ApiResponse } from "@/response/ApiResponse";
import { SkillProps } from "./skillTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";
import { HTTP_STATUS } from "@/constants/api";
import { requestConfig } from "@/config/requestConfig";

export const getSkillAPI = async (): Promise<ApiResponse<SkillProps[]>> => {
  try {
    const response = await fetchBaseResponse<ApiResponse<SkillProps[]>>(
      `${API_CONFIG.ENDPOINTS.SKILLS}`,
      requestConfig("GET")
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response.data;
  } catch (error) {
    const errors = error as AxiosError<string>;
    throw errors;
  }
};
