import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://www.formstack.com/api/v2";
export declare const RATE_LIMIT: {
    DAILY_LIMIT: number;
    WINDOW: number;
};
export declare enum RequestFormat {
    JSON = "json",
    URL_ENCODED = "url-encoded"
}
interface RequestOptions {
    format?: RequestFormat;
    useQueryAuth?: boolean;
}
export declare function makeRequest(accessToken: string, method: HttpMethod, path: string, body?: unknown, queryParams?: Record<string, any>, options?: RequestOptions): Promise<any>;
export declare function makeFormRequest(accessToken: string, method: HttpMethod, path: string, formData: Record<string, any>, queryParams?: Record<string, any>): Promise<any>;
export {};
//# sourceMappingURL=client.d.ts.map