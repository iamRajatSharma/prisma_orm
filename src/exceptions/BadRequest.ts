import { ErrorCode, HttpExceptions } from "./root";

export class BadRequest extends HttpExceptions {
    constructor(message: string, errorCode: ErrorCode) {
        super(message, errorCode, 400, null);
    }
}