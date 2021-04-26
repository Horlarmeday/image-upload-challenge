import { ApiResponse, FailedResponse } from "../types/types";

class ErrorResponse extends Error {
  constructor(httpCode: number, message:string = 'internal server error') {
    super(message);
  }
}

const handleError: (err, res) => any = (err, res) => {
  const { httpCode, message } = err;
  return res.status(httpCode || 500).json({
    status: 'error',
    httpCode,
    message,
  });
};

export { ErrorResponse, handleError };