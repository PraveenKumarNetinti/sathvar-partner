import { BaseResponse } from "../types";

export interface GenerateOTPRequest {
  email: string;
  password?: string;
  otp_for: "Login" | "ForgotPassword";
}

export interface GenerateOTPResponse extends BaseResponse {
  orderId: string;
  token?: string;
}

export interface ResendOTPRequest {
  order_id: string;
}

export interface ResendOTPResponse extends BaseResponse {}

export interface LoginRequest {
  otp_for: string;
  email: string;
  password: string;
  order_id: string;
  otp: string;
}

export interface LoginResponse extends BaseResponse {
  token: string;
}

export interface RegisterRequest {}

export interface RegisterResponse extends BaseResponse {}

export interface ResetPasswordRequest {}

export interface ResetPasswordResponse extends BaseResponse {}
