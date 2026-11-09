import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export declare const METATEXT_API_URL = "https://api.metatext.ai";
export declare const METATEXT_GUARD_URL = "https://guard-api.metatext.ai";
export type AuthType = 'bearer' | 'x-api-key';
export type MetatextApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    endpoint: string;
    baseUrl?: string;
    authType?: AuthType;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
};
export declare function metatextApiCall<T extends HttpMessageBody>({ apiKey, method, endpoint, baseUrl, authType, query, body, }: MetatextApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map