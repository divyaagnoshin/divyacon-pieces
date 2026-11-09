import { HttpMethod, HttpMessageBody, HttpResponse, QueryParams } from '@agnocon/pieces-common';
export declare function wafeqApiCall<T extends HttpMessageBody>({ apiKey, method, path, body, queryParams, idempotencyKey, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: QueryParams;
    idempotencyKey?: string;
}): Promise<HttpResponse<T>>;
export declare function wafeqPaginatedList<T>({ apiKey, path, queryParams, pageSize, maxPages, }: {
    apiKey: string;
    path: string;
    queryParams?: QueryParams;
    pageSize?: number;
    maxPages?: number;
}): Promise<T[]>;
export type WafeqPaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
};
//# sourceMappingURL=client.d.ts.map