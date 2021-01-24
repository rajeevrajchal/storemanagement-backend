import express from "express";
import {allStore, getStoreInfo} from "../../controllers/StoreController";
import checkPermission from "../../middleware/checkPermission";
import {Role} from "../../enum/role";

const storeRoute = express.Router();

storeRoute.get('/:storeId', getStoreInfo)
storeRoute.get('', [checkPermission([Role.customer, Role.super_admin])], allStore)

export default storeRoute
