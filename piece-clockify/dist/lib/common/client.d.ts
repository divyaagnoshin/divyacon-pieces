import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export type ClockifyApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare const BASE_URL = "https://api.clockify.me/api/v1";
export declare function clockifyApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: ClockifyApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map