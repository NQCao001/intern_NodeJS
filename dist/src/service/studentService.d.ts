export declare class StudentService {
    private studentRepository;
    constructor();
    getAll: () => Promise<any>;
    findByName: (name: any) => Promise<any>;
    findStudent: (id: any) => Promise<any>;
    create: (student: any) => Promise<any>;
    edit: (id: any, newStudent: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
}
