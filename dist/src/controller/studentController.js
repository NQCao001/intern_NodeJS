"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const studentService_1 = require("../service/studentService");
class StudentController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let students = await this.studentService.getAll();
                res.json(students);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findById = async (req, res) => {
            try {
                let student = await this.studentService.findStudent(req.params.id);
                res.json(student);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findByName = async (req, res) => {
            try {
                let student = await this.studentService.findByName(req.body.name);
                res.json(student);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createStudent = async (req, res) => {
            try {
                let { student } = await this.studentService.create(req.body);
                res.json({
                    mess: "Create Success!!!",
                    student: student
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.editStudent = async (req, res) => {
            try {
                await this.studentService.edit(req.params.id, req.body);
                res.json({
                    mess: "Edit Success!!!"
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.deleteStudent = async (req, res) => {
            try {
                await this.studentService.delete(req.params.id);
                res.json({
                    mess: "Delete Success!!!"
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.studentService = new studentService_1.StudentService();
    }
}
exports.StudentController = StudentController;
exports.default = new StudentController();
//# sourceMappingURL=studentController.js.map