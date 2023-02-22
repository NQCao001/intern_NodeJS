import {AppDataSource} from "../data-source";
import {Admin} from "../model/admin";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";


export class AdminService {
    private adminRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.adminRepository = AppDataSource.getRepository(Admin);
        })
    }

    checkLogin = async (userLogin) => {
        let user = {
            check: false,
        }
        let userFind = await this.adminRepository.findBy({username: userLogin.username})
        console.log(userLogin)
        console.log(userFind[0].username)
        if(userFind[0].username===userLogin.username && userFind[0].password===userLogin.password){
            user.check=true
        }
        return user;
    }
}