import Router from "express";
import adminController from "../controller/adminController";

export const adminRouter=Router();
adminRouter.post('/login',adminController.login)

