import { BonjoroAuthType } from './auth';
export type KeyValuePair = {
    [key: string]: string | boolean | object | undefined;
};
export declare function getUsers(auth: BonjoroAuthType): Promise<{
    success: boolean;
    data: any;
}>;
export declare function getCampaigns(auth: BonjoroAuthType): Promise<{
    success: boolean;
    data: any;
}>;
export declare function getTemplates(auth: BonjoroAuthType): Promise<{
    success: boolean;
    data: any;
}>;
export declare function addGreet(auth: BonjoroAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
export declare function addProfile(auth: BonjoroAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
//# sourceMappingURL=api.d.ts.map