export declare class UserService {
    private adminRepository;
    constructor();
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        userFind: any[];
    }>;
}
