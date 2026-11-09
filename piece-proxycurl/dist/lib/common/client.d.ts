import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://nubela.co/proxycurl/api";
type QueryValue = string | number | boolean | undefined | null;
export type ProxycurlApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, QueryValue>;
    body?: unknown;
};
export declare function proxycurlApiCall<T>({ apiKey, method, resourceUri, query, body, }: ProxycurlApiCallParams): Promise<T>;
export {};
//# sourceMappingURL=client.d.ts.map