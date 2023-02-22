import { Request, Response } from "express";
export declare class AdminController {
    private adminService;
    constructor();
    login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AdminController;
export default _default;
