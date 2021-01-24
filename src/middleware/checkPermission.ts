import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken"
import ErrorHandler from "../helpers/error"

const secretKey: any = process.env.SECRET_KEY
const checkPermission = (roles: number[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.headers['authorization']) {
                next(new ErrorHandler(401, "You are not authorized"))
            }
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                next(new ErrorHandler(401, "You are not authorized"))
            }
            const jwtVerified = jwt.verify(authorization[1], secretKey)
            if (!jwtVerified) {
                next(new ErrorHandler(401, "You are not authorized"))
            }
            const token = jwt.decode(authorization[1], secretKey)
            if (token) {
                if (roles.length === 0) {
                    // user's role is not authorized
                    return res.status(401).json({message: 'You have no permission'});
                }
                if (roles.length && !roles.includes(token.user.role)) {
                    // user's role is not authorized
                    return res.status(401).json({message: 'You have no permission'});
                }
                next()
            } else {
                return res.status(401).json({message: 'You have no permission'});
            }
        } catch (e) {
            next(e)
        }
    }

}

export default checkPermission
