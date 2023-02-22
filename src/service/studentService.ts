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
    findByName = async (name)=>{
        return await this.studentRepository.query(`select name from students where name like '%${name}%'`)
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