import {AppDataSource} from "../data-source";
import {Students} from "../model/student";

export class StudentService{
    private studentRepository: any;
    constructor() {
        AppDataSource.initialize().then(connection=>{
            this.studentRepository = AppDataSource.getRepository(Students)
        })
    }
    getAll = async () => {
        return await this.studentRepository.find()
    }
    findStudent = async(id)  =>{
        return await this.studentRepository.findBy({id:id})
    }
    create = async (student)=>{
        return await this.studentRepository.save(student)
    }
    edit = async  (id,newStudent)=>{
        return await this.studentRepository.update({id: id}, newStudent)
    }
    delete = async (id)=>{
        return await this.studentRepository.delete(id)
    }
}