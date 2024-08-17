"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
const http_request_error_1 = require("../errors/http-request-error");
class HttpResponse {
    static ok(body) {
        return {
            statusCode: 200,
            body: body,
        };
    }
    static badRequest(error) {
        return {
            statusCode: 400,
            body: error.message,
        };
    }
    static created(body) {
        return {
            statusCode: 201,
            body: body,
        };
    }
    static internalError() {
        return {
            statusCode: 500,
            body: new http_request_error_1.InternalServerError().message,
        };
    }
    static forbidden(error) {
        return {
            statusCode: 403,
            body: error.message,
        };
    }
    static conflict(error) {
        return {
            statusCode: 409,
            body: error.message || "Conflito de recurso.",
        };
    }
    static paymentRequired(error) {
        return {
            statusCode: 402,
            body: error.message || "Pagamento necessário.",
        };
    }
}
exports.HttpResponse = HttpResponse;
