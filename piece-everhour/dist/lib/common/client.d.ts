import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export type EverhourApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | undefined>;
    body?: unknown;
};
export declare const BASE_URL = "https://api.everhour.com";
export declare function everhourApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: EverhourApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map