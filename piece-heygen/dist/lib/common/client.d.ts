import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export type HeygenApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
    apiVersion: 'v1' | 'v2';
};
export declare const BASE_URL_V1 = "https://api.heygen.com/v1";
export declare const BASE_URL_V2 = "https://api.heygen.com/v2";
export declare function heygenApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, apiVersion, }: HeygenApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map