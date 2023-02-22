import {AppDataSource} from "../data-source";
import {Admin} from "../model/admin";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";


export class UserService {
    private adminRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.adminRepository = AppDataSource.getRepository(Admin);
        })
    }

    checkLogin = async (userLogin) => {
        let user = {
            check: false,
            token: '',
            userFind: []
        }
        let userFind = await this.adminRepository.findBy({username: userLogin.username})

        if (userFind.length === 0) {
            user.check = false;
        } else {
            let compare = await bcrypt.compare(userLogin.password, userFind[0].password)
            if (!compare) {
                user.check = false;
            }
            if (compare) {
                let payload = {username: userFind[0].username}
                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                })
                user.token = token;
                user.check = true;
                user.userFind = userFind
            }
        }
        return user;
    }
}