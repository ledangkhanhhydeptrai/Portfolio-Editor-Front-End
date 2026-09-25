import type { AxiosRequestConfig, Method } from "axios";

export const requestConfig = (method: Method = "GET"): AxiosRequestConfig => {
  return {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };
};
