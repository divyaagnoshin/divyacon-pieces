import { HttpMethod } from '@agnocon/pieces-common';
export declare function blandApiCall<T>(params: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    query?: Record<string, string>;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map