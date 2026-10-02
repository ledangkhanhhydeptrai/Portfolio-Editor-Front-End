import { API_CONFIG } from "@/config/api";
import { fetchBaseResponse } from "@/config/fetchBaseResponse";
import { LoginProps, LoginResponse, RegisterProps } from "./authTypes";
import { ApiResponse } from "@/response/ApiResponse";
import { requestConfig } from "@/config/requestConfig";

export const RegisterAPI = async ({ username, email, password }: RegisterProps) => {
  try {
    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetchBaseResponse<null>(API_CONFIG.ENDPOINTS.REGISTER, {
      method: "POST",
      data: formData,
    });

    // Backend trả 400, 401, 409...
    // fetchBaseResponse đã convert thành response
    if (response.success === false) {
      throw new Error(response.message);
    }

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Đăng ký thất bại. Vui lòng thử lại.");
  }
};
export const LoginAPI = async ({ email, password }: LoginProps) => {
  try {
    const response = await fetchBaseResponse<ApiResponse<LoginResponse>>(
      `${API_CONFIG.ENDPOINTS.LOGIN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email, password },
      },
    );
    if (response.success === false) {
      throw new Error(response.message);
    }
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Đăng nhập thất bại. Vui lòng thử lại.");
  }
};
export const LogoutAPI = async () => {
  const response = await fetchBaseResponse<null>(
    API_CONFIG.ENDPOINTS.LOG_OUT,
    requestConfig("POST"),
  );

  if (response.success === false) {
    throw new Error(response.message);
  }

  return response;
};
