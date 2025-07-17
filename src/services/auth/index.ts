import { api } from "@/axios.config";

import * as T from "./types";

export const authServices = {
  queries: {},
  mutations: {
    generateOTP: (data: T.GenerateOTPRequest) =>
      api.post<T.GenerateOTPRequest, T.GenerateOTPResponse>(
        "/generate-otp",
        data,
      ),

    resendOTP: (data: T.ResendOTPRequest) =>
      api.post<T.ResendOTPRequest, T.ResendOTPResponse>("/resend-otp", data),

    login: (data: T.LoginRequest) =>
      api.post<T.LoginRequest, T.LoginResponse>("/login", data),

    register: (data: T.RegisterRequest) =>
      api.post<T.RegisterRequest, T.RegisterResponse>("/register", data),

    logout: () => api.post("/logout"),

    resetPassword: (data: T.ResetPasswordRequest) =>
      api.post<T.ResetPasswordRequest, T.ResetPasswordResponse>(
        "/forgot-password",
        data,
      ),
  },
};
