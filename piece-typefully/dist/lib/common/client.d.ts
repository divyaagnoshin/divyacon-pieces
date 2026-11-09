import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export declare const TYPEFULLY_API_URL = "https://api.typefully.com/v2";
export declare function typefullyApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: TypefullyApiCallParams): Promise<T>;
export type TypefullyApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
};
//# sourceMappingURL=client.d.ts.map