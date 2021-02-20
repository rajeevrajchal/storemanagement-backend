import {NextFunction, Request, Response} from "express";
import ErrorHandler from "../helpers/error";
import User from "../models/User";


export const userInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const _id = req.params.id
        const userInfo = await User.findById(_id);
        if (userInfo) {
            return res.status(200).json({
                status: 'success',
                users: userInfo
            });
        } else {
            next(new ErrorHandler(400, "cannot get user"))
        }
    } catch (e) {
        next(new ErrorHandler(400, e.message))
    }
}
