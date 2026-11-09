import { HttpMethod } from '@agnocon/pieces-common';
export declare const gcsCommon: {
    gcsBaseUrl: string;
    pubsubBaseUrl: string;
    makeGCSRequest(method: HttpMethod, path: string, accessToken: string, body?: any): Promise<any>;
    makePubSubRequest(method: HttpMethod, path: string, accessToken: string, body?: any): Promise<any>;
    makeRequest(method: HttpMethod, path: string, accessToken: string, body?: any): Promise<any>;
};
//# sourceMappingURL=client.d.ts.map