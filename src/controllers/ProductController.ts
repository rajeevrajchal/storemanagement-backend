import {NextFunction, Request, Response} from "express";
import ErrorHandler from "../helpers/error";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.create(req.body)
        if (product) {
            return res.status(201).json({
                status: 'success',
                product: product
            });
        }
        next(new ErrorHandler(400, "Cannot Create Product"))
    } catch (e) {
        next(new ErrorHandler(400, e.message))
    }
}

export const allProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.find()
        if (product) {
            return res.status(201).json({
                status: 'success',
                product: product
            });
        }
        next(new ErrorHandler(400, "Cannot Create Product"))
    } catch (e) {
        next(new ErrorHandler(400, e.message))
    }
}
