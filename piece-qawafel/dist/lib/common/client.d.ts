import { HttpMethod, HttpMessageBody, HttpResponse, QueryParams } from '@agnocon/pieces-common';
import { QawafelAuth } from './auth';
export declare function qawafelApiCall<T extends HttpMessageBody>({ auth, method, path, body, queryParams, idempotencyKey, }: {
    auth: QawafelAuth;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: QueryParams;
    idempotencyKey?: string;
}): Promise<HttpResponse<T>>;
export declare function qawafelPaginatedList<T>({ auth, path, queryParams, pageSize, maxPages, }: {
    auth: QawafelAuth;
    path: string;
    queryParams?: QueryParams;
    pageSize?: number;
    maxPages?: number;
}): Promise<T[]>;
export type QawafelPaginatedResponse<T> = {
    data: T[];
    pagination: {
        next_cursor: string | null;
    };
};
//# sourceMappingURL=client.d.ts.map