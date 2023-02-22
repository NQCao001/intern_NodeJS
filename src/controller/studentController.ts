import {Request, Response} from "express";

import {StudentService} from "../service/studentService";

export class StudentController {
    private studentService: StudentService;

    constructor() {
        this.studentService = new StudentService()
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let students = await this.studentService.getAll()
            res.json(students)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    findById = async (req: Request, res: Response) => {
        try {
            let student = await this.studentService.findStudent(req.params.id);
            res.json(student)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    findByName = async (req: Request, res: Response) => {
        try {
            let student = await this.studentService.findByName(req.body.name);
            res.json(student)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    createStudent = async (req: Request, res: Response) => {
        try {
            let {student} = await this.studentService.create(req.body);
            res.json({
                mess: "Create Success!!!",
                student: student
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    editStudent = async (req: Request, res: Response) => {
        try {
            await this.studentService.edit(req.params.id, req.body);
            res.json({
                mess: "Edit Success!!!"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    deleteStudent = async (req: Request, res: Response) => {
        try {
            await this.studentService.delete(req.params.id);
            res.json({
                mess: "Delete Success!!!"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new StudentController();