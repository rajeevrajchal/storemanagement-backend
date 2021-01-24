import {NextFunction, Request, Response} from "express";
import ErrorHandler from "../helpers/error";
import Store from "../models/Store";

export const createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const store = await Store.create(req.body)
        if (store) {
            return res.status(201).json({
                status: 'success',
                store: store
            });
        } else {
            next(new ErrorHandler(400, "Store cannot be created."))
        }
    } catch (e) {
        next(new ErrorHandler(400, e.message))
    }
}

export const getStoreInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const storeId = req.params.storeId
        const store = await Store.findById(storeId).populate("user")
        if (store) {
            return res.status(201).json({
                status: 'success',
                store: store
            });
        } else {
            next(new ErrorHandler(400, "Data cannot be fetch."))
        }
    } catch (e) {
        next(new ErrorHandler(400, e.message))
    }
}

export const allStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const store = await Store.find()
        if (store) {
            return res.status(200).json({
                status: 'success',
                store: store
            });
        } else {
            next(new ErrorHandler(400, "Data cannot be fetch."))
        }
    } catch (e) {
        next(new ErrorHandler(400, e.message))
    }
}
