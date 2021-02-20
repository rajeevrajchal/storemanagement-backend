import {NextFunction, Request, Response} from "express";
import ErrorHandler from "../helpers/error";
import User from "../models/User";
import jwt from "jsonwebtoken"
import {throws} from "assert";

const generateToken = (user) => {
    const secretkey = process.env.SECRET_KEY
    const payload = {
        user: {
            id: user.id,
            name: user.first_name,
            role: user.role
        }
    };
    return jwt.sign(
        payload,
        secretkey,
        {
            algorithm: "HS256",
            expiresIn: 3600
        },
    );
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body
        const user = await User.findOne({email: email})
        if (!user) {
            next(new ErrorHandler(400, "User Doesn't Exist"))
        }
        const token = await generateToken(user)
        if (token) {
            return res.status(200).json({
                status: 'success',
                user: user,
                token: token
            });
        }
        next(new ErrorHandler(400, "Internal Server Error"))
    } catch (e) {
        next(new ErrorHandler(400, e.message))
    }
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.create(req.body)
        if (user) {
            return res.status(201).json({
                status: 'success',
                users: user
            });
        } else {
            // res.status(400).json({
            //     success: "false",
            //     message:"cannot get user"
            // });
            next(new ErrorHandler(400, "cannot store user"))
        }
    } catch (e) {
        res.status(400).json({
            success: "false",
            message:e.message,
            code: e.code
        });
       // throw new ErrorHandler(400, "cannot store user")
    }
}
