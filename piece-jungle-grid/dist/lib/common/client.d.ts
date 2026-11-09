import { HttpMethod } from '@agnocon/pieces-common';
export declare class JungleGridApiError extends Error {
    readonly status: number;
    readonly code: string;
    constructor({ status, code, message }: JungleGridApiErrorParams);
}
export declare const jungleGridClient: {
    apiCall: typeof apiCall;
    normalizeBaseUrl: typeof normalizeBaseUrl;
};
declare function apiCall({ auth, method, path, body, queryParams, }: JungleGridApiCallParams): Promise<unknown>;
declare function normalizeBaseUrl(baseUrl: string): string;
type JungleGridAuthValue = {
    api_base_url: string;
    api_key: string;
} | {
    props: {
        api_base_url: string;
        api_key: string;
    };
};
type JungleGridApiCallParams = {
    auth: JungleGridAuthValue;
    method: HttpMethod;
    path: string;
    body?: Record<string, unknown>;
    queryParams?: Record<string, string>;
};
type JungleGridApiErrorParams = {
    status: number;
    code: string;
    message: string;
};
export {};
//# sourceMappingURL=client.d.ts.map