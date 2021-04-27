import { CustomError } from 'ts-custom-error'

class ErrorResponse extends CustomError {
  public constructor(public code: number, message = 'internal server error') {
    super(message);
  }
}

const handleError = (err, res) => {
  const { code, message } = err;
  res.status(code || 500).json({
    status: 'error',
    code,
    message,
  });
};

export { ErrorResponse, handleError };