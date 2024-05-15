// message, status code, error code, error name

export class HttpExceptions extends Error {
    message: string;
    errorCode: ErrorCode;
    statusCode: number;
    errors: any;

    constructor(message: string, errorCode: ErrorCode, statusCode: number, errors: any) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }

}


export enum ErrorCode {
    USER_NOT_FOUND = 1001,
    USER_ALREAD_EXISTS = 1002,
    INCORRECT_PASSWORD = 1003
}