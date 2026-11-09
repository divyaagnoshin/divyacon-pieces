import { HttpMethod } from '@agnocon/pieces-common';
type ChargebeeRequestParams = {
    site: string;
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: Record<string, unknown>;
    contentType?: 'application/json' | 'application/x-www-form-urlencoded';
};
export declare function getChargebeeBaseUrl(site: string): string;
export declare function getChargebeeAuthHeader(apiKey: string): string;
export declare function cleanObject(value: Record<string, unknown>): Record<string, unknown>;
export declare function chargebeeRequest<TResponse>({ site, apiKey, method, path, body, contentType, }: ChargebeeRequestParams): Promise<TResponse>;
export {};
//# sourceMappingURL=client.d.ts.map