import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
export declare function elasticEmailRequest<T = unknown>({ apiKey, method, path, queryParams, body, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    queryParams?: QueryParams;
    body?: unknown;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map