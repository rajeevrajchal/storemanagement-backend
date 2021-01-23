import * as express from 'express';
import {Request, Response} from "express";
//api routes
import userRoute from "./api/user";

const router = express.Router();

//actual api routes
router.use('/api/user', userRoute)

//by default routes
router.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Backend of store management. ',
    });
});

export default router;
