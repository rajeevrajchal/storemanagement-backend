import express from "express";
import {createProduct} from "../../controllers/ProductController";
import validateRule from "../../data_validations";
import {productValidationRule} from "../../data_validations/rules";

const productRoute = express.Router();

productRoute.post("", [
    productValidationRule,
    validateRule
], createProduct)


export default productRoute
