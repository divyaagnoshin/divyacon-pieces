import { HttpMethod } from '@agnocon/pieces-common';
export declare const CONNECTUC_BASE_URL = "https://api.connectuc.io";
interface ApiCallParams {
    accessToken: string;
    endpoint: string;
    method: HttpMethod;
    body?: unknown;
    queryParams?: Record<string, string>;
}
export declare function connectucApiCall<T = unknown>(params: ApiCallParams): Promise<T>;
export declare function getUserId(accessToken: string): Promise<string>;
export {};
//# sourceMappingURL=api-helpers.d.ts.map