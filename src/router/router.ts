import Router from "express";
import {studentRouter} from "./studentRouter";
import {adminRouter} from "./adminRouter";

export const router = Router();
router.use('/student',studentRouter)
router.use('/admin',adminRouter)
