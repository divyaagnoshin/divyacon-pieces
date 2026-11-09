import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export type SkyvernApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare const BASE_URL = "https://api.skyvern.com/v1";
export declare function skyvernApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: SkyvernApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map