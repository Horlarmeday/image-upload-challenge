export interface SuccessResponse<T = any> {
  status: 'success';
  data: T;
}

export interface FailedResponse<T = any> {
  status: 'error';
  message: string;
  data: T;
}

export interface ApiResponse {
  <T>(
    res: Response,
    data: T,
    httpCode: number,
    message?: string
  ): Response;
}
