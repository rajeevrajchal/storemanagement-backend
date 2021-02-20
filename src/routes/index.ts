import * as express from 'express';
import {Request, Response} from "express";
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

//api routes
import userRoute from "./api/userRoute";
import storeRoute from "./api/storeRoute";
import authRoute from "./api/authRoute";

import swaggerOptions from "../utils/swagger"

const router = express.Router();

const specs = swaggerJsdoc(swaggerOptions);

// docs api 
router.use("/docs", swaggerUi.serve);
//actual api routes
router.use('/api/v1/user', userRoute)
router.use('/api/v1/store', storeRoute)
router.use('/api/v1/auth', authRoute)

//by default routes
router.get("/docs", swaggerUi.setup(specs, { explorer: true }));
router.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Backend of store management. ',
    });
});


export default router;
