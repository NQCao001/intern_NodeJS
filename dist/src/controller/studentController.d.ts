import { Request, Response } from "express";
export declare class StudentController {
    private studentService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    createStudent: (req: Request, res: Response) => Promise<void>;
    editStudent: (req: Request, res: Response) => Promise<void>;
    deleteStudent: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StudentController;
export default _default;
