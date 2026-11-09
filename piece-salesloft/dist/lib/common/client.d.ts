import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
export declare const SALESLOFT_API_BASE = "https://api.salesloft.com/v2";
export declare function salesloftRequest<T = unknown>({ apiKey, method, path, queryParams, body, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    queryParams?: QueryParams;
    body?: unknown;
}): Promise<T>;
/**
 * Remove undefined/null/empty-string values from an object before sending
 * as a request body.
 */
export declare function cleanPayload(payload: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=client.d.ts.map