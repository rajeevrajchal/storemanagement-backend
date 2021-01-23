import {NextFunction, Request, Response} from "express";
import ErrorHandler from "../helpers/error";

export const register = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("hello world")
        return res.status(200).json({
            status: 'success',
            users: {
                "first_name": "Rajeev",
                "last_name": "Rajchal",
                "role": "super_admin"
            }
        });
    } catch (e) {
        console.log(e)
        next(new ErrorHandler(400, e.message))
    }
}
