import { ApiResponse } from "@/response/ApiResponse";
import { ProjectProps } from "./projectTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { AxiosError } from "axios";

export const getProjectAPI = async (): Promise<ApiResponse<ProjectProps[]>> => {
  try {
    const response = await fetchBaseResponse<ApiResponse<ProjectProps[]>>(
      `${API_CONFIG.ENDPOINTS.PROJECTS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    if (response.status !== 200) {
      throw new Error(`HTTP Status:${response.status}`);
    }
    return response.data;
  } catch (error) {
    const errors = error as AxiosError<string>;
    throw errors;
  }
};
