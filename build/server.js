/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/UserController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/UserController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.register = void 0;\nconst error_1 = __importDefault(__webpack_require__(/*! ../helpers/error */ \"./src/helpers/error.ts\"));\nconst register = (req, res, next) => {\n    try {\n        console.log(\"hello world\");\n        return res.status(200).json({\n            status: 'success',\n            users: {\n                \"first_name\": \"Rajeev\",\n                \"last_name\": \"Rajchal\",\n                \"role\": \"super_admin\"\n            }\n        });\n    }\n    catch (e) {\n        console.log(e);\n        next(new error_1.default(400, e.message));\n    }\n};\nexports.register = register;\n\n\n//# sourceURL=webpack://backend/./src/controllers/UserController.ts?");

/***/ }),

/***/ "./src/data_validations/index.ts":
/*!***************************************!*\
  !*** ./src/data_validations/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nconst validateRule = (req, res, next) => {\n    const errors = express_validator_1.validationResult(req);\n    if (errors.isEmpty()) {\n        return next();\n    }\n    const extractedErrors = [];\n    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));\n    return res.status(422).json({\n        type: \"error\",\n        name: \"Entities Error\",\n        errors: extractedErrors,\n    });\n};\nexports.default = validateRule;\n\n\n//# sourceURL=webpack://backend/./src/data_validations/index.ts?");

/***/ }),

/***/ "./src/data_validations/rules/index.ts":
/*!*********************************************!*\
  !*** ./src/data_validations/rules/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userValidationRule = void 0;\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nexports.userValidationRule = [\n    express_validator_1.check('first_name').not().isEmpty().withMessage('First Name is Empty'),\n    express_validator_1.check('last_name').not().isEmpty().withMessage('Last Name is Empty'),\n    express_validator_1.check('contact_no').not().isEmpty().withMessage('Contact Number is Empty'),\n    express_validator_1.check('address').not().isEmpty().withMessage('Address is Empty'),\n    express_validator_1.check('role').not().isEmpty().withMessage('Role is Required'),\n    express_validator_1.check('email')\n        .isEmail()\n        .withMessage('Email is not correct').normalizeEmail(),\n    express_validator_1.check('password')\n        .not().isEmpty().withMessage('Password is Empty')\n        .isLength({ min: 8 }).withMessage('Password must not be less than 8 characters')\n];\n\n\n//# sourceURL=webpack://backend/./src/data_validations/rules/index.ts?");

/***/ }),

/***/ "./src/helpers/error.ts":
/*!******************************!*\
  !*** ./src/helpers/error.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handleError = void 0;\nclass ErrorHandler extends Error {\n    constructor(statusCode, message) {\n        super();\n        // @ts-ignore\n        this.statusCode = statusCode;\n        this.message = message;\n    }\n}\nconst handleError = (err, res) => {\n    const { statusCode, message } = err;\n    res.status(statusCode).json({\n        success: \"false\",\n        message\n    });\n};\nexports.handleError = handleError;\nexports.default = ErrorHandler;\n\n\n//# sourceURL=webpack://backend/./src/helpers/error.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst app = express_1.default();\napp.use(express_1.default.static(__dirname + '/build/server.js'));\napp.use(express_1.default.json());\napp.use(express_1.default.urlencoded({ extended: true }));\napp.use(cors_1.default());\napp.use(routes_1.default);\nexports.default = app;\n\n\n//# sourceURL=webpack://backend/./src/index.ts?");

/***/ }),

/***/ "./src/routes/api/user.ts":
/*!********************************!*\
  !*** ./src/routes/api/user.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst rules_1 = __webpack_require__(/*! ../../data_validations/rules */ \"./src/data_validations/rules/index.ts\");\nconst data_validations_1 = __importDefault(__webpack_require__(/*! ../../data_validations */ \"./src/data_validations/index.ts\"));\nconst UserController_1 = __webpack_require__(/*! ../../controllers/UserController */ \"./src/controllers/UserController.ts\");\nconst userRoute = express_1.default.Router();\nuserRoute.post('', [\n    rules_1.userValidationRule,\n    data_validations_1.default,\n], UserController_1.register);\nexports.default = userRoute;\n\n\n//# sourceURL=webpack://backend/./src/routes/api/user.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express = __importStar(__webpack_require__(/*! express */ \"express\"));\n//api routes\nconst user_1 = __importDefault(__webpack_require__(/*! ./api/user */ \"./src/routes/api/user.ts\"));\nconst router = express.Router();\n//actual api routes\nrouter.use('/api/user', user_1.default);\n//by default routes\nrouter.get('/', (req, res) => {\n    res.send({\n        message: 'Backend of store management. ',\n    });\n});\nexports.default = router;\n\n\n//# sourceURL=webpack://backend/./src/routes/index.ts?");

/***/ }),

/***/ "./src/utils/db.ts":
/*!*************************!*\
  !*** ./src/utils/db.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst options = {\n    useNewUrlParser: true,\n    useFindAndModify: false,\n    useCreateIndex: true,\n    useUnifiedTopology: true,\n    promiseLibrary: global.Promise,\n    keepAlive: 1,\n    connectTimeoutMS: 30000,\n};\nconst connectDB = async () => {\n    await mongoose_1.default.connect(MONGODB_URI, options);\n};\nexports.default = connectDB;\n\n\n//# sourceURL=webpack://backend/./src/utils/db.ts?");

/***/ }),

/***/ "./src/utils/www.ts":
/*!**************************!*\
  !*** ./src/utils/www.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nconst db_1 = __importDefault(__webpack_require__(/*! ./db */ \"./src/utils/db.ts\"));\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\nconst error_1 = __importDefault(__webpack_require__(/*! ../helpers/error */ \"./src/helpers/error.ts\"));\nconst port = process.env.PORT || 8000;\nindex_1.default.set('port', port);\nconst server = http_1.default.createServer(index_1.default);\ndb_1.default().then(() => {\n    server.listen(port, () => {\n        console.log(`The server is running at http://localhost:${port}`);\n    });\n}).catch(error => {\n    throw new error_1.default(500, \"Connection Failed\");\n});\n\n\n//# sourceURL=webpack://backend/./src/utils/www.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("express-validator");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/utils/www.ts");
/******/ })()
;