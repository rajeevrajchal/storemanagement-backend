import express from "express";
import {login, register} from "../../controllers/AuthController";
import {userLoginValidationRule, userValidationRule} from "../../data_validations/rules";
import validateRule from "../../data_validations";

const authRoute = express.Router();

/**
 * @swagger
 * path:
 *  /auth/login/:
 *    post:
 *      summary: Login Users
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: login user success with token.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

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
