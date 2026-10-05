import { ApiResponse } from "@/response/ApiResponse";
import { SocialLinkProps } from "./socialLinkTypes";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { API_CONFIG } from "@/config/api";
import { requestConfig } from "@/config/requestConfig";
import { HTTP_STATUS } from "@/constants/api";
import { AxiosError } from "axios";

export const getAllSocialLink = async (): Promise<ApiResponse<SocialLinkProps[]>> => {
  try {
    const response = await fetchBaseResponse<SocialLinkProps[]>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.SOCIAL_LINKS}`,
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
export const getSocialLinkById = async (
  id: string,
): Promise<ApiResponse<SocialLinkProps | null>> => {
  try {
    const response = await fetchBaseResponse<SocialLinkProps>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.SOCIAL_LINK_BY_ID(id)}`,
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
export const getAllUserSocialLink = async (): Promise<ApiResponse<SocialLinkProps[]>> => {
  try {
    const response = await fetchBaseResponse<SocialLinkProps[]>(
      `${API_CONFIG.ENDPOINTS.USER.SOCIAL_LINKS}`,
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
export const getSocialLinkUserById = async (
  id: string,
): Promise<ApiResponse<SocialLinkProps | null>> => {
  try {
    const response = await fetchBaseResponse<SocialLinkProps>(
      `${API_CONFIG.ENDPOINTS.USER.SOCIAL_LINKS_USER_BY_ID(id)}`,
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
