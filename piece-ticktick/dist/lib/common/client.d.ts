import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export type TickTickApiCallParams = {
    accessToken: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare function tickTickApiCall<T extends HttpMessageBody>({ accessToken, method, resourceUri, query, body, }: TickTickApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map