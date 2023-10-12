import { InternalServerError } from '../errors/http-request-error'
import { HttpBodyResponse } from '../protocols/http'

export class HttpResponse {
  static ok (body: any): HttpBodyResponse {
    return {
      statusCode: 200,
      body: body
    }
  }

  static badRequest (error: any): HttpBodyResponse {
    return {
      statusCode: 400,
      body: error.message
    }
  }

  static created (body: any): HttpBodyResponse {
    return {
      statusCode: 201,
      body: body
    }
  }

  static InteanlError (): HttpBodyResponse {
    return {
      statusCode: 500,
      body: new InternalServerError().message
    }
  }
}
