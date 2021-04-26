import { SuccessResponse } from "../types/types";

export function successResponse(res, httpCode, data): SuccessResponse {
  return res.status(httpCode).json({
    status: 'success',
    data,
  });
}