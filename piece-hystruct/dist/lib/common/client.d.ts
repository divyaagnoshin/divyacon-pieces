import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export declare const HYSTRUCT_BASE_URL = "https://api.hystruct.com";
export type HystructApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    endpoint: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
};
export declare function hystructApiCall<T extends HttpMessageBody>({ apiKey, method, endpoint, query, body, }: HystructApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map