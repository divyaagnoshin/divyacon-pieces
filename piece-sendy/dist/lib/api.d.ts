import { SendyAuthType } from './auth';
type KeyValuePair = {
    [key: string]: string | boolean | undefined;
};
export declare function getBrands(auth: SendyAuthType): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function getLists(auth: SendyAuthType, data?: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function subscribe(auth: SendyAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function subscribeMultiple(auth: SendyAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function unsubscribe(auth: SendyAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function deleteSubscriber(auth: SendyAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function status(auth: SendyAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function count(auth: SendyAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export declare function createCampaign(auth: SendyAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    text: string;
    data: any[];
}>;
export {};
//# sourceMappingURL=api.d.ts.map