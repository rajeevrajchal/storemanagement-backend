import {check} from "express-validator"

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
