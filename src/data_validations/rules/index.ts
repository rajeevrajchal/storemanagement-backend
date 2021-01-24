import {check} from "express-validator"

export const userLoginValidationRule: any = [
    check('email')
        .isEmail()
        .withMessage('Email is not correct').normalizeEmail(),
]
export const userValidationRule: any = [

    check('first_name').not().isEmpty().withMessage('First Name is Empty'),
    check('last_name').not().isEmpty().withMessage('Last Name is Empty'),
    check('contact_no').not().isEmpty().withMessage('Contact Number is Empty'),
    check('address').not().isEmpty().withMessage('Address is Empty'),
    check('role').not().isEmpty().withMessage('Role is Required'),
    check('email')
        .isEmail()
        .withMessage('Email is not correct').normalizeEmail(),
    check('password')
        .not().isEmpty().withMessage('Password is Empty')
        .isLength({min: 8}).withMessage('Password must not be less than 8 characters')
]

export const productValidationRule: any = [
    check('name').not().isEmpty().withMessage('Product Name is Empty'),
    check('stock').not().isEmpty().withMessage('Stock is Empty'),
    check('wholesale_price').not().isEmpty().withMessage('Whole Sale Price is Empty'),
    check('mark_price').not().isEmpty().withMessage('Mark price is Empty'),
    check('description').not().isEmpty().withMessage('Description is Empty'),
    check('user').not().isEmpty().withMessage('Creator of product is Empty'),
]
