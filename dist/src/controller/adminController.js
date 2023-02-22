"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const admin_service_1 = require("../service/admin-service");
class AdminController {
    constructor() {
        this.login = async (req, res) => {
            try {
                let user = await this.adminService.checkLogin(req.body);
                if (user.check) {
                    res.json({
                        user,
                        mess: 'Đăng nhập thành công'
                    });
                }
                else {
                    res.json({
                        mess: 'Sai tên tài khoản hoặc mật khẩu',
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.adminService = new admin_service_1.AdminService();
    }
}
exports.AdminController = AdminController;
exports.default = new AdminController();
//# sourceMappingURL=adminController.js.map