import {Response} from "express"
interface ErrorInterface {
    statusCode: number ,
    message: string | undefined
}

class ErrorHandler extends Error {
    constructor(statusCode: number, message: string) {
        super();
        // @ts-ignore
        this.statusCode = statusCode
        this.message = message;
    }
}

export const handleError = (err: ErrorInterface, res: Response) => {
    const {statusCode, message} = err;
    res.status(statusCode).json({
        success: "false",
        message
    });
};

export default ErrorHandler
