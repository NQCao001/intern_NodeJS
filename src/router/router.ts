import Router from "express";
import {studentRouter} from "./studentRouter";

export const router = Router();
router.use('/student',studentRouter)
