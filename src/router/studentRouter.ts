import Router from "express";
import studentController from "../controller/studentController";

export const studentRouter=Router();
studentRouter.get('/',studentController.getAll);
studentRouter.get('/:id',studentController.findById);
studentRouter.post('/',studentController.createStudent);
studentRouter.put('/:id',studentController.editStudent);
studentRouter.delete('/:id',studentController.deleteStudent);