import { HttpMethod } from '@agnocon/pieces-common';
export interface BrowserlessAuth {
    apiToken: string;
    region: string;
    customBaseUrl?: string;
}
export declare function convertBinaryToBase64(binaryData: any): string;
export declare function isBinaryResponse(headers: any): boolean;
export declare const browserlessCommon: {
    apiCall({ auth, method, resourceUri, body, headers, }: {
        auth: BrowserlessAuth;
        method: HttpMethod;
        resourceUri: string;
        body?: any;
        headers?: Record<string, string>;
    }): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=client.d.ts.map