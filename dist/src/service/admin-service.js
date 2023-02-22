"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const data_source_1 = require("../data-source");
const admin_1 = require("../model/admin");
class AdminService {
    constructor() {
        this.checkLogin = async (userLogin) => {
            let user = {
                check: false,
            };
            let userFind = await this.adminRepository.findBy({ username: userLogin.username });
            console.log(userLogin);
            console.log(userFind[0].username);
            if (userFind[0].username === userLogin.username && userFind[0].password === userLogin.password) {
                user.check = true;
            }
            return user;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.adminRepository = data_source_1.AppDataSource.getRepository(admin_1.Admin);
        });
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=admin-service.js.map