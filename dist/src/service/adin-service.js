"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdinService = void 0;
const data_source_1 = require("../data-source");
const admin_1 = require("../model/admin");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class AdinService {
    constructor() {
        this.checkLogin = async (userLogin) => {
            let user = {
                check: false,
                token: '',
                userFind: []
            };
            let userFind = await this.adminRepository.findBy({ username: userLogin.username });
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(userLogin.password, userFind[0].password);
                if (!compare) {
                    user.check = false;
                }
                if (compare) {
                    let payload = { username: userFind[0].username };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    user.token = token;
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.adminRepository = data_source_1.AppDataSource.getRepository(admin_1.Admin);
        });
    }
}
exports.AdinService = AdinService;
//# sourceMappingURL=adin-service.js.map