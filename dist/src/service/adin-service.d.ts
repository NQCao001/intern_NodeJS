export declare class AdinService {
    private adminRepository;
    constructor();
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        userFind: any[];
    }>;
}
