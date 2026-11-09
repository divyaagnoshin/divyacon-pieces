import { HttpMethod } from '@agnocon/pieces-common';
export declare function edenAiApiCall<T = any>({ apiKey, method, resourceUri, body, query, headers: customHeaders, timeout, maxRetries, }: {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    body?: unknown;
    query?: Record<string, string | number | boolean>;
    headers?: Record<string, string>;
    timeout?: number;
    maxRetries?: number;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map