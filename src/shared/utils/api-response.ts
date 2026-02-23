export interface ApiSuccessResponse<T> {
  data: T;
  error: null;
  message?: string;
}

export interface ApiErrorResponse {
  data: null;
  error: string;
  message: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export function successResponse<T>(
  data: T,
  message?: string
): ApiSuccessResponse<T> {
  return { data, error: null, message };
}

export function errorResponse(
  error: string,
  message: string
): ApiErrorResponse {
  return { data: null, error, message };
}
