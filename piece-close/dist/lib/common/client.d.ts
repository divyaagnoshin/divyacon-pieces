import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export type CloseApiCallParams = {
    accessToken: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare const CLOSE_API_URL = "https://api.close.com/api/v1";
export declare function closeApiCall<T extends HttpMessageBody>({ accessToken, method, resourceUri, query, body, }: CloseApiCallParams): Promise<T>;
export declare function closePaginatedApiCall<T extends HttpMessageBody>({ accessToken, method, resourceUri, query, body, }: CloseApiCallParams): Promise<T[]>;
//# sourceMappingURL=client.d.ts.map