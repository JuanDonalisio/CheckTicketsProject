import { HttpResponse, HttpStatusCode } from "../models/Http";

export function responseWithMessage({
  statusCode: HttpStatusCode,
  message: any,
}) {
  return { statusCode, body: JSON.stringify({ message }, null, 2) };
}

export function responseWithoutMessage({
  statusCode: HttpStatusCode,
  message: any,
}) {
  return {
    statusCode,
    body:
      typeof message === "string" ? message : JSON.stringify(message, null, 2),
  };
}
