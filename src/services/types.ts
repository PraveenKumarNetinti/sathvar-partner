export interface BaseResponse {
  success: "1" | "0" | "-1" | "3";
  message: string;
  code?: string;
}

export interface BaseAuthenticatedRequest {
  from_date?: string;
  to_date?: string;
  count_per_page?: number;
  current_page_number?: number;
}

export interface UserProfileResponse extends BaseResponse {
  from_date: string;
  to_date: string;
  data: Record<string, unknown>;
}
