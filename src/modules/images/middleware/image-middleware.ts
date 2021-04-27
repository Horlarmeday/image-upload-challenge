import { Request, Response, NextFunction } from 'express'
import { ErrorResponse } from "../../../common/responses/error-response";

export function imageChecks(req: Request, res: Response, next: NextFunction) {
  if (!req.files || Object.keys(req.files).length === 0) {
    throw new ErrorResponse(400, 'No files were uploaded.')
  }

  // if (!file.mimetype.match(/.(jpg|jpeg|png|gif)$/i)) {
  //   throw new ErrorResponse(400, 'File is not an image.')
  // }

  next()
}