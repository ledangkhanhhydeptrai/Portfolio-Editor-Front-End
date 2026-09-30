import { API_CONFIG } from "@/config/api";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { RegisterProps } from "./authTypes";
import { AxiosError } from "axios";

export const RegisterAPI = async ({
  username,
  email,
  password
}: RegisterProps) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  try {
    const response = await fetchBaseResponse(
      `${API_CONFIG.ENDPOINTS.REGISTER}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: formData
      }
    );
    if (response.status !== 200) {
      throw new Error(`HTTP Status:${response.status}`);
    }
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
