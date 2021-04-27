import { handleError } from "../../common/responses/error-response";
import * as winston from "winston";

export default function(error, req, res, next) {
  winston.error(error.message, error);
  handleError(error, res);
}