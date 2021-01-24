import express from "express";
import { userInfo} from "../../controllers/UserController";
import {createStore} from "../../controllers/StoreController";

const userRoute = express.Router();

userRoute.get('/:id',userInfo)
userRoute.post('/create-store', createStore)

export default userRoute
