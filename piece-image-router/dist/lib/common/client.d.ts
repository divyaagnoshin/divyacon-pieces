import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.imagerouter.io";
export type ImageRouterApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    body?: any;
    headers?: Record<string, string>;
};
export declare function imageRouterApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, body, headers, }: ImageRouterApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map