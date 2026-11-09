import { ClearoutAuthType } from './auth';
export type KeyValuePair = {
    [key: string]: string | boolean | object | undefined;
};
export declare function getCredits(auth: ClearoutAuthType): Promise<{
    success: boolean;
    data: any;
}>;
export declare function instantVerify(auth: ClearoutAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
//# sourceMappingURL=api.d.ts.map