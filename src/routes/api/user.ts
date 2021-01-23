import express from "express";
import {userValidationRule} from "../../data_validations/rules";
import validateRule from "../../data_validations";
import {register} from "../../controllers/UserController";

const userRoute = express.Router();

userRoute.post('', [
    userValidationRule,
    validateRule,
], register)

export default userRoute
