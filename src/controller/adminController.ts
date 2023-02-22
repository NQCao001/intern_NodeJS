import {Request, Response} from "express";
import {AdminService} from "../service/admin-service";

export class AdminController {
    private adminService: AdminService;
    constructor() {
        this.adminService = new AdminService()
    }
    login = async (req: Request, res: Response) => {
        try {
            let user = await this.adminService.checkLogin(req.body);
            if (user.check) {
                res.json({
                    user,
                    mess: 'Đăng nhập thành công'
                })
            } else {
                res.json({
                    mess: 'Sai tên tài khoản hoặc mật khẩu',
                })
            }
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}
export default new AdminController();