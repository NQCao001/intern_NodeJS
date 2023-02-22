"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const data_source_1 = require("../data-source");
const student_1 = require("../model/student");
class StudentService {
    constructor() {
        this.getAll = async () => {
            return await this.studentRepository.find();
        };
        this.findByName = async (name) => {
            return await this.studentRepository.query(`select name from students where name like '%${name}%'`);
        };
        this.findStudent = async (id) => {
            return await this.studentRepository.findBy({ id: id });
        };
        this.create = async (student) => {
            return await this.studentRepository.save(student);
        };
        this.edit = async (id, newStudent) => {
            return await this.studentRepository.update({ id: id }, newStudent);
        };
        this.delete = async (id) => {
            return await this.studentRepository.delete(id);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.studentRepository = data_source_1.AppDataSource.getRepository(student_1.Students);
        });
    }
}
exports.StudentService = StudentService;
//# sourceMappingURL=studentService.js.map