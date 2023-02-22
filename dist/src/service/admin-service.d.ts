export declare class AdminService {
    private adminRepository;
    constructor();
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
    }>;
}
