import * as express from 'express';
import {Request, Response} from "express";
//api routes
import userRoute from "./api/userRoute";
import storeRoute from "./api/storeRoute";
import authRoute from "./api/authRoute";

const router = express.Router();

//actual api routes
router.use('/api/user', userRoute)
router.use('/api/store', storeRoute)
router.use('/api/auth', authRoute)

//by default routes
router.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Backend of store management. ',
    });
});

export default router;
