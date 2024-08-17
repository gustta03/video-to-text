import { InternalServerError } from "../errors/http-request-error";
import { HttpBodyResponse } from "../protocols/http";

export class HttpResponse {
  static ok(body: any): HttpBodyResponse {
    return {
      statusCode: 200,
      body: body,
    };
  }

  static badRequest(error: any): HttpBodyResponse {
    return {
      statusCode: 400,
      body: error.message,
    };
  }

  static created(body: any): HttpBodyResponse {
    return {
      statusCode: 201,
      body: body,
    };
  }

  static internalError(): HttpBodyResponse {
    return {
      statusCode: 500,
      body: new InternalServerError().message,
    };
  }

  static forbidden(error: Error): HttpBodyResponse {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  static conflict(error: any): HttpBodyResponse {
    return {
      statusCode: 409,
      body: error.message || "Conflito de recurso.",
    };
  }

  static paymentRequired(error: any): HttpBodyResponse {
    return {
      statusCode: 402,
      body: error.message || "Pagamento necessário.",
    };
  }
}
