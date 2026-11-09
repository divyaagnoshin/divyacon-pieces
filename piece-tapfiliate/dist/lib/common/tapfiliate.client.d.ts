import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
export declare const TAPFILIATE_BASE_URL = "https://api.tapfiliate.com/1.6";
export declare function buildTapfiliateQuery(values?: Record<string, unknown>): QueryParams;
type TapfiliateApiCallParams = {
    method: HttpMethod;
    path: string;
    apiKey: string;
    apiBaseUrl?: string;
    query?: QueryParams;
    body?: unknown;
};
export declare function parseTapfiliateNextPage(linkHeader: string | string[] | undefined): string | undefined;
export declare function tapfiliateApiCall<T extends HttpMessageBody>({ method, path, apiKey, apiBaseUrl, query, body, }: TapfiliateApiCallParams): Promise<T>;
export declare function tapfiliatePaginatedApiCall<T extends HttpMessageBody>({ method, path, apiKey, apiBaseUrl, query, body, }: TapfiliateApiCallParams): Promise<T[]>;
export {};
//# sourceMappingURL=tapfiliate.client.d.ts.map