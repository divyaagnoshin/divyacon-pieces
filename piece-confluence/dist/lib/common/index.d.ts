import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
export type ConfluenceApiCallParams = {
    domain: string;
    username: string;
    password: string;
    version: 'v1' | 'v2';
    method: HttpMethod;
    resourceUri: string;
    query?: QueryParams;
    body?: any;
    headers?: Record<string, string>;
};
export type PaginatedResponse<T> = {
    results: T[];
    _links?: {
        next?: string;
    };
};
export declare function confluenceApiCall<T extends HttpMessageBody>({ domain, username, password, method, version, resourceUri, query, body, headers, }: ConfluenceApiCallParams): Promise<T>;
export declare function confluencePaginatedApiCall<T extends HttpMessageBody>({ domain, username, password, method, version, resourceUri, query, body, }: ConfluenceApiCallParams): Promise<T[]>;
export type ConfluenceRawRequestParams = {
    domain: string;
    username: string;
    password: string;
    method: HttpMethod;
    url: string;
    query?: QueryParams;
    body?: any;
    headers?: Record<string, string>;
    responseType?: 'arraybuffer' | 'json' | 'blob' | 'text';
    followRedirects?: boolean;
};
export declare function confluenceRawRequest<T>({ domain, username, password, method, url, query, body, headers, responseType, followRedirects, }: ConfluenceRawRequestParams): Promise<T>;
export declare function escapeStorageValue(value: string): string;
export declare function parsePageIdFromUrl(url: string): string | null;
//# sourceMappingURL=index.d.ts.map