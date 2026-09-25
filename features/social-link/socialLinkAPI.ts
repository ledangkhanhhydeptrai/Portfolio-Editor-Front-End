import { ApiResponse } from "@/response/ApiResponse";
import { SocialLinkProps } from "./socialLinkTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { requestConfig } from "@/config/requestConfig";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const getAllSocialLink = async (): Promise<
  ApiResponse<SocialLinkProps[]>
> => {
  try {
    const response = await fetchBaseResponse<ApiResponse<SocialLinkProps[]>>(
      `${API_CONFIG.ENDPOINTS.SOCIAL_LINKS}`,
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
