import express from "express";
import {login, register} from "../../controllers/AuthController";
import {userLoginValidationRule, userValidationRule} from "../../data_validations/rules";
import validateRule from "../../data_validations";

const authRoute = express.Router();

//USER LOGIN
authRoute.post('/login', [
    validateRule,
    userLoginValidationRule
], login)

//USER REGISTER / CREATION
authRoute.post('/register', [
    userValidationRule,
    validateRule,
], register)

export default authRoute
